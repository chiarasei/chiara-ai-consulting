// Conversion events for Google Ads. Each event goes to window.dataLayer and,
// when the visitor's advertising choice allows it, to the Google Ads tag.
import { canTrackAds, updateConsent } from "@/lib/consent";

export type ConversionEvent =
  | "contact_form_submit"
  | "calendly_booking"
  | "email_click"
  | "phone_click"
  | "whatsapp_click";

export const GOOGLE_ADS_ID = "AW-18540176955";

export const CONVERSION_SEND_TO: Record<ConversionEvent, string> = {
  contact_form_submit: `${GOOGLE_ADS_ID}/HyE9CMmCv6sdELvM0ohF`,
  calendly_booking: `${GOOGLE_ADS_ID}/X1FMCMyCv6sdELvM0ohF`,
  email_click: `${GOOGLE_ADS_ID}/xXo8CM-Cv6sdELvM0ohF`,
  phone_click: `${GOOGLE_ADS_ID}/C_AACNKCv6sdELvM0ohF`,
  whatsapp_click: `${GOOGLE_ADS_ID}/0E8cCNWCv6sdELvM0ohF`,
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Loads the Google tag only when advertising tracking is allowed. */
export async function loadGoogleAds(): Promise<boolean> {
  const allowed = await canTrackAds();
  if (!allowed) return false;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  updateConsent("granted");
  if (document.querySelector("script[data-google-ads]")) return true;
  window.gtag("set", "developer_id.dZjgwMW", true);
  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_ADS_ID);
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  script.async = true;
  script.dataset.googleAds = "";
  document.head.appendChild(script);
  return true;
}

export const trackConversion = (event: ConversionEvent, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  void (async () => {
    if (!(await loadGoogleAds())) return;
    window.gtag?.("event", "conversion", { send_to: CONVERSION_SEND_TO[event], ...params });
  })();
};

let calendlyListening = false;
/** Calendly posts "calendly.event_scheduled" from its embed when a booking is made. */
export const listenForCalendlyBookings = () => {
  if (calendlyListening || typeof window === "undefined") return;
  calendlyListening = true;
  window.addEventListener("message", (e) => {
    if (e.origin !== "https://calendly.com") return;
    const data = e.data as { event?: string } | null;
    if (data?.event === "calendly.event_scheduled") trackConversion("calendly_booking");
  });
};
