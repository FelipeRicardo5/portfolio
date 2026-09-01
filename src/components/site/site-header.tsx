import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { getOppositeLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Locale, PortfolioContent } from "@/types/portfolio";

export function SiteHeader({ locale, content }: { locale: Locale; content: PortfolioContent }) {
  const otherLocale = getOppositeLocale(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link href={`/${locale}`} className="text-sm font-semibold tracking-[0.16em] text-foreground/95 uppercase">
          Felipe Ricardo
        </Link>
        <nav className="flex items-center gap-2">
          <Link href={`/${otherLocale}`} className="px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground">
            {content.navigation.switchLocale}
          </Link>
          <ThemeToggle />
          <a
            href={content.resumeUrl}
            download
            className={cn(buttonVariants({ size: "sm", variant: "subtle" }), "ml-1 hidden md:inline-flex")}
          >
            {content.navigation.downloadResume}
          </a>
        </nav>
      </div>
    </header>
  );
}
