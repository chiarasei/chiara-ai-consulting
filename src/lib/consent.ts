// Advertising consent for the Google tag. Visitors in the EEA, UK, Switzerland
// and Canada (Quebec cannot be told apart) see the cookie banner; others are
// tracked by default unless they opt out in Cookie settings.
export const STORAGE_KEY = "cookie_consent";
export const CONSENT_RECORD_KEY = "cookie_consent_record";
export const CONSENT_NOTICE_VERSION = "2026-10-27";
export const OPEN_COOKIE_SETTINGS = "open-cookie-settings";

export const CONSENT_COUNTRIES = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH','CA'];

let consentRegion: Promise<boolean> | undefined;
let country: string | undefined;

export const countryNeedsConsent = (c: string | undefined) =>
  !c || c === "XX" || c === "T1" || CONSENT_COUNTRIES.includes(c);

export function isConsentRequiredRegion(): Promise<boolean> {
  return (consentRegion ??= lookupConsentRegion());
}

async function lookupConsentRegion(): Promise<boolean> {
  try {
    const res = await fetch("/cdn-cgi/trace", { signal: AbortSignal.timeout(2000) });
    if (!res.ok) return true;
    country = (await res.text()).match(/^loc=([A-Z0-9]{2})$/m)?.[1];
    return countryNeedsConsent(country);
  } catch {
    return true;
  }
}

export const getChoice = () => localStorage.getItem(STORAGE_KEY);

export async function canTrackAds(): Promise<boolean> {
  const choice = getChoice();
  if (choice !== null) return choice === "granted";
  const required = await isConsentRequiredRegion();
  const latest = getChoice();
  return latest !== null ? latest === "granted" : !required;
}

export function updateConsent(decision: "granted" | "denied") {
  if (decision === "denied") window.gtag?.("set", "user_data", null);
  window.gtag?.("consent", "update", {
    ad_storage: decision,
    ad_user_data: decision,
    ad_personalization: decision,
  });
}

/** Stores the choice plus a record of when, where and which notice was shown. */
export function saveChoice(decision: "granted" | "denied", language: string) {
  localStorage.setItem(STORAGE_KEY, decision);
  localStorage.setItem(
    CONSENT_RECORD_KEY,
    JSON.stringify({
      decision,
      at: new Date().toISOString(),
      region: country ?? "unknown",
      notice: CONSENT_NOTICE_VERSION,
      language,
      purposes: ["Google Ads conversion measurement"],
      recipient: "Google",
    }),
  );
  updateConsent(decision);
}
