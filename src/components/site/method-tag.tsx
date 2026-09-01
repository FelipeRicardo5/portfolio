import { cn } from "@/lib/utils";

const METHOD_STYLES = {
  GET: "bg-accent-blue/15 text-accent-blue",
  POST: "bg-accent-green/15 text-accent-green",
} as const;

export function MethodTag({ method, path }: { method: keyof typeof METHOD_STYLES; path: string }) {
  return (
    <div className="mb-3 flex items-center gap-2 font-mono text-xs">
      <span className={cn("rounded-md px-2 py-1 font-semibold", METHOD_STYLES[method])}>{method}</span>
      <span className="text-muted-foreground">{path}</span>
    </div>
  );
}
