# Maher Vai Coffee — Responsive Web Layout (Project 2)

A static, single-page website for a small-batch coffee roastery and cafe. Originally built as **Project 1** (semantic HTML/CSS) and extended here for **Project 2** (Responsive Web Layout) of the DecodeLabs Frontend Development Industrial Training track.

### Live Demo

🔗 [Project 2 — Maher Vai Coffee](https://mujakkir-maher.github.io/Decode-Labs-internship/project-2/)

## Purpose

The goal of this project is to practice writing clean, semantic HTML and organized, responsive CSS — no JavaScript, no frameworks. The page introduces the business, shows its menu, a small photo gallery, and visiting information (hours and location).

## Features

- Top navigation linking to on-page sections (About, Menu, Gallery, Visit); collapses into a hamburger menu below 768px, built with the native HTML Popover API (no JavaScript)
- Hero section introducing the business
- About section with a short story and quick facts (`<dl>`)
- Menu section grouped by category (Coffee, Pastries, Beans to go) with prices
- Photo gallery (illustrated SVGs, since no real photos are used)
- Hours and location section, including a clickable email link
- Fully responsive layout: single column on mobile, multi-column on tablet/desktop
- Accessible markup: semantic landmarks, `aria-label` / `aria-labelledby`, visible keyboard focus states, meaningful `alt` text

## Technologies used

- **HTML5** — semantic structure only (`header`, `nav`, `main`, `section`, `article`-style groupings, `dl`, `address`, `footer`)
- **CSS3** — custom properties (design tokens), Flexbox, CSS Grid, `clamp()` for fluid type, mobile-first media queries
- **Google Fonts** — DM Serif Display (headings), Work Sans (body text)
- **SVG** — hand-built illustrations used as placeholder images

No JavaScript, no build tools, no external libraries or frameworks are used.

## Project structure

```
mahervai/
├── index.html          # Page markup
├── style.css            # All styling (organized by section, see file comments)
└── assets/
    ├── hero-coffee.svg
    ├── gallery-interior.svg
    ├── gallery-beans.svg
    └── gallery-pastry.svg
```

## How to run

This is a static site — no build step, no dependencies to install.

1. Download/clone the `mahervai/` folder, keeping `index.html`, `style.css`, and `assets/` together in the same structure.
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Edge).

That's it — no local server is required, though one can be used (e.g. VS Code's Live Server extension) if preferred.

## Limitations

- All business details (name, address, menu items, prices, hours) are placeholder content and should be replaced with real information before this is used as an actual business site.
- Images are illustrated SVGs, not real photographs — swap in real photos under `assets/` and update the `src`/`alt` attributes in `index.html` when available.
- No backend, form submission, or ordering functionality — this is a presentational page only.
- No JavaScript is used by design; the mobile hamburger menu uses the native Popover API instead, which requires a reasonably modern browser (all major browsers since 2024).
