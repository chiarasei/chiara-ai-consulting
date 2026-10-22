# Project Rules

- Use `ProjectBrowser` for live-project screenshots so portfolio imagery keeps one accessible browser-frame treatment across pages.
- Normalize bilingual Services card content before rendering, using English fallback fields and validated string arrays, so incomplete content cannot crash the page.
- Log caught page errors with the original message, route, JavaScript stack and React component stack, so the friendly error screen never hides diagnostic evidence.
- Import route pages statically (no React.lazy or dynamic imports) and key the route error boundary by pathname, so page switches never fetch missing code files after a publish and one error never sticks across pages.
- Ship no app shell service worker; main.tsx unregisters leftover workers so returning visitors always load the current build.