import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em]",
        className,
      )}
    >
      <span className="section-label-dot size-2 shrink-0 bg-brand-accent" />
      {children}
    </p>
  );
}
