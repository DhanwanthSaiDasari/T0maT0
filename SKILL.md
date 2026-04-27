---
name: tomato-design
description: Use this skill to generate well-branded interfaces and assets for Tomato, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- Tokens live in `colors_and_type.css` — import it from every artifact.
- Brand voice: lowercase, declarative, no emoji, no exclamation points. The user is presumed competent.
- Two type families only: `JetBrains Mono` (UI, numerals, body) and `Newsreader` (marketing headlines and long-form prose).
- One accent: `--tomato` (`#D7301F`), used only for running timers and focus.
- No shadows, no gradients, no rounded corners except inputs (2px) and the running-timer chip (pill).
- No emoji, no unicode-as-icons. Use Lucide at 1.5px stroke, 22px, always with a label.

## File map

- `README.md` — full content + visual foundations
- `colors_and_type.css` — tokens
- `assets/` — wordmark, favicon
- `preview/` — design system cards
- `ui_kits/app/` — keyboard-driven timer (React + Babel)
- `ui_kits/marketing/` — single-page site
