# Plan: Swedish + international upgrade

Brand stays the same: serif headlines, cream background, navy and gold. Every step is checked on mobile. Work goes section by section, and I stop after each one so you can review.

## Step 1. Hero
- Eyebrow: "WEB & APP STUDIO · GOTHENBURG · WORKING WORLDWIDE". Headline unchanged.
- Two columns. Left: headline, paragraph, "Start a project" + "See our work" buttons, then the Lovable badge with "Certified Lovable Website & App Expert" (navy) and "Trusted by clients in Sweden and the UK" (muted).
- Right: layered laptop + phone mockup using the existing mother.fm, QR-Meny and She Rises screenshots, soft shadow, slight tilt.
- Gentle fade-in on load. On mobile: text, buttons, badge first, then mockup.

## Step 2. Trust strip
Thin full-width strip under the hero, thin lines top and bottom, small text:
Certified Lovable Expert · Live products shipped · Clients in Sweden & UK · Logins, payments & full web apps

## Step 3. Badge across the site
Keep the existing badges. Add a small badge next to "Start a project" on the Pricing and Contact pages.

## Step 4. Portfolio
"See our work" scrolls to the Portfolio section. Each card: screenshot, one-line description, tech highlights (for example logins, payments, audio streaming) and a "View project" link.
- mother.fm: maternal wellness audio platform, UK client
- QR-Meny: QR menu service for restaurants
- She Rises: daily devotional member platform

## Step 5. Languages
- SV / EN switch in the top menu (already partly there, made clearer).
- Swedish browsers get Swedish automatically, everyone else English. A manual choice is remembered.
- Separate addresses: /en/... and /sv/... with hreflang tags. Old addresses redirect.
- Swedish copy rewritten in natural local wording ("webbyrå Göteborg", "hemsida för företag", "bygga webbapp").

## Step 6. SEO and ads readiness
- Own title and description per language. English targets "Lovable expert", "hire Lovable developer", "MVP developer for startups". Swedish targets "webbyrå Göteborg", "hemsida företag Göteborg".
- Sitemap updated with both language versions.
- Tracking events ready for Google Ads: contact form sent, "Start a project" clicks, WhatsApp clicks.

## Step 7. Contact
Form, email link, WhatsApp button, optional "Book a video call" button, and a note: "Based in Gothenburg, Central European Time (CET). Replies within one working day."

## Things I need from you
- WhatsApp: should it use +46 73 531 69 50?
- Video call: a booking link (Calendly, Google Calendar or similar). Without one I'll hide that button for now.
- Reply time: is "within one working day" right?

## Technical details
- Language routing: `/:lang(en|sv)/*` wrapper in App.tsx. LanguageContext reads the language from the URL. Root `/` redirects based on `navigator.language` and localStorage.
- hreflang and per-language meta set by SEOHead. Crawlers that don't run JavaScript only see the static index.html head (a limit of the current setup).
- Tracking: a small `trackEvent()` helper that pushes to `window.dataLayer` / `gtag` when present, so Google Ads or Tag Manager can use it later without code changes.
- Mockup built with CSS frames around the existing project images. No new image generation.
