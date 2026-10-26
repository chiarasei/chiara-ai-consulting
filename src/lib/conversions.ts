// Conversion events for Google Ads. Events go to window.dataLayer and, once the
// Google tag is installed, to gtag. Nothing is sent to Google until that tag exists.
export type ConversionEvent =
  | "contact_form_submit"
  | "calendly_booking"
  | "email_click"
  | "phone_click"
  | "whatsapp_click";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackConversion = (event: ConversionEvent, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params);
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
