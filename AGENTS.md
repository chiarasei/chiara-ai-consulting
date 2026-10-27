# Project Rules

- Use `ProjectBrowser` for live-project screenshots so portfolio imagery keeps one accessible browser-frame treatment across pages.
- Normalize bilingual Services card content before rendering, using English fallback fields and validated string arrays, so incomplete content cannot crash the page.
- Log caught page errors with the original message, route, JavaScript stack and React component stack, so the friendly error screen never hides diagnostic evidence.
- Import route pages statically (no React.lazy or dynamic imports) and key the route error boundary by pathname, so page switches never fetch missing code files after a publish and one error never sticks across pages.
- Ship no app shell service worker; main.tsx unregisters leftover workers so returning visitors always load the current build.- Site pages live under /en and /sv (`:lang` route + LanguageGate); unprefixed paths redirect by browser language, and internal links use `lp()` from LanguageContext, so every page has one address per language for ads and hreflang.
- Contact enquiries go through the send-contact-email function, which saves to contact_enquiries first and emails second, so a mail outage never loses an enquiry.
- Conversions go through `trackConversion` in src/lib/conversions.ts, which loads the Google tag only when src/lib/consent.ts allows it, so every event respects the visitor cookie choice.
- Keep Services menu entries and page section anchors in the shared service catalog so both languages link to the same stable destinations.

- Use the scaffolded managed auth email handler and SDK for custom authentication emails; no queue infrastructure is used because delivery is platform managed.
- Send contact notifications through the registered Lovable email template after saving the enquiry, using its ID for deduplication and the validated visitor email for Reply to, so email failures never lose enquiries.
- Map translated privacy slugs through localizePath so links, language switching and canonical alternates stay consistent.
