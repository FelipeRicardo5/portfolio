import { locales, type Locale } from "@/types/portfolio";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getOppositeLocale(locale: Locale): Locale {
  return locale === "en" ? "pt-br" : "en";
}
