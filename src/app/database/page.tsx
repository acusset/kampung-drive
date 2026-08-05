import { db } from "@/lib/db";
import { waitlistSignups } from "@/lib/db/schema";

export default async function Page() {
  const signups = await db.select().from(waitlistSignups);

  const signupRows = signups.map((signup) => (
    <tr key={signup.id}>
      <td>{signup.email}</td>
      <td>{signup.role}</td>
      <td>{signup.createdAt.toISOString()}</td>
    </tr>
  ));

  if (signups.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">DB</h1>
        <p>No signups found.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">DB</h1>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>{signupRows}</tbody>
      </table>
    </div>
  );
}
