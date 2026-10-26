export type Lang = "en" | "sv";

export const isLang = (v: unknown): v is Lang => v === "en" || v === "sv";

/** Swedish browsers get Swedish, everyone else English. */
export const detectLanguage = (languages: readonly string[] = typeof navigator !== "undefined" ? navigator.languages ?? [navigator.language] : []): Lang =>
  languages.some((l) => l?.toLowerCase().startsWith("sv")) ? "sv" : "en";

/** Read the language prefix from a pathname, if any. */
export const langFromPath = (pathname: string): Lang | null => {
  const seg = pathname.split("/")[1];
  return isLang(seg) ? seg : null;
};

/** "/contact" + "sv" => "/sv/contact"; "/" => "/sv". */
export const localizePath = (lang: Lang, path: string): string => {
  let clean = path === "/" || path === "" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (clean === "/privacy" || clean === "/integritetspolicy") {
    clean = lang === "sv" ? "/integritetspolicy" : "/privacy";
  }
  return `/${lang}${clean}`;
};

/** Strip the language prefix: "/sv/pricing" => "/pricing". */
export const stripLang = (pathname: string): string => {
  if (!langFromPath(pathname)) return pathname || "/";
  const rest = pathname.slice(3);
  return rest === "" ? "/" : rest;
};

/** Same page in the other language. */
export const switchLanguagePath = (pathname: string, lang: Lang): string => localizePath(lang, stripLang(pathname));
