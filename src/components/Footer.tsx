export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-8 max-[640px]:px-5">
        <a
          href="#top"
          className="font-[family-name:var(--serif)] text-lg font-bold tracking-[0.5px] text-foreground no-underline"
        >
          Kampung Ride<span className="text-accent">.</span>
        </a>
        <p className="max-w-[520px] text-[13px] text-[#7c9088]">
          Kampung Ride is currently in development. This page collects early interest only and does not yet
          offer a live matching service.
        </p>
      </div>
    </footer>
  );
}
