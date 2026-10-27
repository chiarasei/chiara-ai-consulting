import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { OPEN_COOKIE_SETTINGS, STORAGE_KEY, getChoice, isConsentRequiredRegion, saveChoice, updateConsent } from "@/lib/consent";
import { loadGoogleAds } from "@/lib/conversions";

const copy = {
  en: {
    title: "Cookies for ads",
    text: "We would like to use Google Ads cookies to see which ads lead to enquiries. Nothing is used for this unless you accept. You can change your choice anytime under Cookie settings.",
    accept: "Accept",
    reject: "Decline",
    more: "Privacy policy",
  },
  sv: {
    title: "Cookies för annonser",
    text: "Vi vill använda cookies från Google Ads för att se vilka annonser som leder till förfrågningar. Inget används för detta om du inte accepterar. Du kan ändra ditt val när du vill under Cookieinställningar.",
    accept: "Acceptera",
    reject: "Avböj",
    more: "Integritetspolicy",
  },
};

const CookieBanner = () => {
  const { language, lp } = useLanguage();
  const [open, setOpen] = useState(false);
  const t = copy[language];

  useEffect(() => {
    if (getChoice() === null) void isConsentRequiredRegion().then((req) => req && getChoice() === null && setOpen(true));
    void loadGoogleAds();
    const openSettings = () => setOpen(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return;
      if (e.newValue === "granted" || e.newValue === "denied") updateConsent(e.newValue);
      if (e.newValue === "granted") void loadGoogleAds();
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS, openSettings);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS, openSettings);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  if (!open) return null;

  const choose = (d: "granted" | "denied") => {
    saveChoice(d, language);
    if (d === "granted") void loadGoogleAds();
    setOpen(false);
  };

  return (
    <div role="dialog" aria-labelledby="cookie-title" aria-live="polite" className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-xl border border-border bg-card p-5 shadow-lg sm:inset-x-6">
      <h2 id="cookie-title" className="font-serif text-xl text-foreground">{t.title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {t.text}{" "}
        <Link to={lp("/privacy")} className="underline underline-offset-2 hover:text-foreground">{t.more}</Link>
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Button className="min-h-11 flex-1" onClick={() => choose("granted")}>{t.accept}</Button>
        <Button variant="outline" className="min-h-11 flex-1" onClick={() => choose("denied")}>{t.reject}</Button>
      </div>
    </div>
  );
};

export default CookieBanner;
