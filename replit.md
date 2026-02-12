# replit.md

## Overview

This is a static Arabic-language website ("إنترنت آمن في مصر" — "Safe Internet in Egypt") advocating for internet safety and digital rights in Egypt. It's a single-page informational site built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no backend. The site is right-to-left (RTL) and uses the Cairo Arabic font from Google Fonts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure static site**: Single `index.html` file with inline CSS styles and no build pipeline.
- **No framework**: Vanilla HTML/CSS/JS only. No React, Vue, or similar.
- **RTL layout**: The entire page is set to `dir="rtl"` and `lang="ar"` for Arabic content.
- **Design pattern**: Single-page layout with sections (hero with video background, card grids, demand lists, volunteer sections) navigated via smooth-scroll anchor links.
- **CSS approach**: Mix of inline `<style>` block in the HTML head and a separate `style.css` file (currently minimal). CSS custom properties (variables) are used for theming colors (blue, green, red).
- **JavaScript**: Minimal — `js/script.js` handles smooth scrolling for anchor links. There's also an empty `script.js` at root level.

### File Structure
```
index.html       — Main (and only) page with all content and most styles inline
style.css        — External stylesheet (currently near-empty, just sets html dimensions)
script.js        — Empty JS file at root (unused)
js/script.js     — Smooth scroll behavior for anchor navigation
```

### Key Design Decisions
- **No backend or database**: This is a purely informational/advocacy site with no dynamic data, forms processing, or server-side logic.
- **Inline styles over external CSS**: Most styling lives in the HTML `<style>` block. The external `style.css` is barely used. If extending, consider migrating inline styles to the external stylesheet for maintainability.
- **Google Fonts for Arabic typography**: Uses the Cairo font family for proper Arabic text rendering.
- **Sticky header with navigation**: The nav bar stays fixed at the top during scroll.
- **Card-based content layout**: Uses CSS Grid with `auto-fit` and `minmax` for responsive card layouts.

### Notes for Development
- The `index.html` file appears truncated — some CSS properties are cut off (e.g., `filter: b` on the hero video, and the `h2` style ending with `margin-`). These likely need to be completed.
- There are two `script.js` files — one at root (empty) and one in `js/` (functional). The root one can likely be removed or consolidated.
- No bundler, transpiler, or package manager is configured. To serve locally, a simple static file server is sufficient.

## External Dependencies

- **Google Fonts**: Cairo font family loaded via `fonts.googleapis.com` CDN — used for Arabic text rendering across the site.
- **No other external services**: No APIs, databases, analytics, or third-party integrations are present.