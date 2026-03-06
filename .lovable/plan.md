

## Problem

The CSS filter applied to the logo image (`brightness(0)` followed by color transforms) converts the entire image to a flat single-color silhouette. This destroys all the detail in the logo — the brain icon, text, and design elements are all lost.

## Fix

Remove the CSS `style={{ filter: "..." }}` from the logo `<img>` tags in both **Navigation.tsx** and **Footer.tsx**. This will restore the original logo image with all its details (brain icon, "ChiaraAI Consulting" text, design elements).

Since the background is now dark, the logo should display naturally. If the original logo image has dark elements that don't show well on the dark background, we can add a subtle `drop-shadow` or `brightness` adjustment that doesn't flatten the image.

### Files to edit:
1. **`src/components/Navigation.tsx`** (line 49) — Remove the `style={{ filter: "..." }}` prop from the logo img
2. **`src/components/Footer.tsx`** (line 22) — Remove the `style={{ filter: "..." }}` prop from the logo img

Both images will keep their existing classes (size, object-contain, hover effects) but display the actual logo artwork instead of a flat color shape.

