import { buttonVariants } from "@heroui/styles";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-8 py-4.5 max-[760px]:px-5 max-[760px]:py-4">
        <a
          href="#top"
          className="font-[family-name:var(--serif)] text-2xl font-bold tracking-[0.5px] text-foreground no-underline"
        >
          Kampung Ride<span className="text-accent">.</span>
        </a>
        <ul className="flex list-none items-center gap-8 max-[760px]:hidden">
          <li>
            <a href="#how" className="text-sm text-muted no-underline transition-colors hover:text-foreground">
              How it works
            </a>
          </li>
          <li>
            <a href="#commute" className="text-sm text-muted no-underline transition-colors hover:text-foreground">
              Meet your commute
            </a>
          </li>
          <li>
            <a href="#faq" className="text-sm text-muted no-underline transition-colors hover:text-foreground">
              FAQ
            </a>
          </li>
        </ul>
        <a href="#signup" className={buttonVariants({ variant: "primary" })}>
          Get early access
        </a>
      </div>
    </nav>
  );
}
