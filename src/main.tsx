import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// This site does not use offline caching. Remove any service worker and its
// caches that an older version or another app on this address may have left
// in a returning visitor's browser, so they always get the current site.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => registrations.forEach((r) => r.unregister()))
    .catch(() => {});
}
if ("caches" in window) {
  caches
    .keys()
    .then((keys) =>
      keys
        .filter((k) => /workbox|precache|runtime/i.test(k))
        .forEach((k) => caches.delete(k)),
    )
    .catch(() => {});
}

createRoot(document.getElementById("root")!).render(<App />);
