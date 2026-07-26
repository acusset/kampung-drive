import { promises as fs } from "fs";
import path from "path";

export type RouteEntry = { from: string; to: string; ts: number };
export type Subscription = { email: string; from: string; to: string; ts: number };
export type Trending = { from: string; to: string; count: number };
export type WaitlistSummary = { count: number; trending: Trending[] };

interface WaitlistData {
  count: number;
  routes: RouteEntry[];
  subscriptions: Subscription[];
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");
const MAX_ROUTES = 200;
const MAX_TRENDING = 5;

async function readData(): Promise<WaitlistData> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw) as WaitlistData;
  } catch {
    return { count: 0, routes: [], subscriptions: [] };
  }
}

async function writeData(data: WaitlistData): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
}

// Serializes reads-then-writes so concurrent submits don't clobber each other's counts.
let writeQueue: Promise<unknown> = Promise.resolve();
function enqueue<T>(task: () => Promise<T>): Promise<T> {
  const result = writeQueue.then(task);
  writeQueue = result.then(
    () => undefined,
    () => undefined,
  );
  return result;
}

function computeTrending(routes: RouteEntry[]): Trending[] {
  const counts = new Map<string, Trending>();
  for (const route of routes) {
    const key = `${route.from}␟${route.to}`;
    const existing = counts.get(key);
    if (existing) {
      existing.count += 1;
    } else {
      counts.set(key, { from: route.from, to: route.to, count: 1 });
    }
  }
  return [...counts.values()].sort((a, b) => b.count - a.count).slice(0, MAX_TRENDING);
}

export async function getWaitlistSummary(): Promise<WaitlistSummary> {
  const data = await readData();
  return { count: data.count, trending: computeTrending(data.routes) };
}

export async function addWaitlistEntry(entry: {
  email: string;
  from: string;
  to: string;
}): Promise<WaitlistSummary> {
  return enqueue(async () => {
    const data = await readData();
    const ts = Date.now();

    data.count += 1;
    data.routes.push({ from: entry.from, to: entry.to, ts });
    if (data.routes.length > MAX_ROUTES) {
      data.routes = data.routes.slice(data.routes.length - MAX_ROUTES);
    }
    // Emails live only here, server-side — never returned by the API.
    data.subscriptions.push({ email: entry.email, from: entry.from, to: entry.to, ts });

    await writeData(data);
    return { count: data.count, trending: computeTrending(data.routes) };
  });
}
