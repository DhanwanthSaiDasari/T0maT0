# Tomato — Design System

> A pomodoro timer for people who have already decided. Minimal, keyboard-only, no fluff.

## Context

Tomato is a single-purpose pomodoro timer. The product is one keyboard-driven app and a one-page marketing site. There is no settings sprawl, no themes, no gamification, no streak shaming, no "premium tier." You press `Space`, you work for 25 minutes, you stop.

The brand is defined by what it refuses:
- No mascot, no cute animations, no celebratory confetti
- No notifications other than a single bell at session end
- No dashboards, charts, or "insights"
- No mouse target larger than necessary; every primary action has a key

The audience is engineers, writers, and researchers who already use vim, tmux, or Things — people who treat their tools like instruments, not playgrounds.

## Sources

This system was designed from a brief, not a codebase. There is no upstream Figma or repo. If a real product exists later, this README is the canonical spec to align against.

- Brief: "Pomodoro timer — minimal, no fluff, keyboard shortcuts only"
- Logo, fonts, and assets generated in this project (see `assets/`, `fonts/` via Google Fonts CDN)

## Index

```
.
├── README.md                 — this file
├── SKILL.md                  — agent skill manifest
├── colors_and_type.css       — tokens (CSS vars) + semantic styles
├── assets/                   — logo, favicon, icons (Lucide subset)
├── preview/                  — design-system cards (registered)
├── ui_kits/
│   ├── app/                  — the timer app (keyboard-driven)
│   └── marketing/            — the one-page site
└── slides/                   — (not generated; no deck brief)
```

## CONTENT FUNDAMENTALS

**Voice.** Direct, lowercase, declarative. Short sentences. No exclamation points. No emoji. No "Hey there!" The product talks like a unix tool, not a wellness app.

**Casing.**
- UI labels: `lowercase` (e.g. "start", "pause", "skip break")
- Headings on the marketing site: `Sentence case` (e.g. "Twenty-five minutes. That's it.")
- Section labels and keyboard hints: `UPPERCASE MONO`, tracked +6%
- Brand wordmark: `tomato` (always lowercase)

**Pronouns.** Second person, neutral. "You start a timer" — never "Let's get focused!" or "We help you focus." The user is presumed competent.

**Numerals.** Always digits, tabular, never spelled out. `25:00`, not "twenty-five minutes" — except in marquee headlines on the marketing site, where the spelled-out form is allowed for typographic rhythm.

**Time format.** `MM:SS` always, leading zeros, never `1m 30s`. Sessions are referred to as "pomodoros" (lowercase) in body, never "tomatoes" (the brand uses the English word; the product uses the Italian one — small joke, never explained).

**Examples.**

> "press space to start. esc to cancel. that's it."

> "you finished four pomodoros today."

> "Twenty-five minutes. That's it."

> "no accounts. no sync. no notifications you didn't ask for."

**Avoid.** "Hey", "Let's", "Awesome!", "🎉", "Pro tip:", "Did you know", "Boost your productivity", "Crush your goals."

## VISUAL FOUNDATIONS

**Palette.** Two colors do almost all the work: warm paper (`#F5F1E8`) and warm ink (`#1A1714`). Tomato red (`#D7301F`) appears only when a timer is running or a focused element needs to declare itself. Green (`#2F6B3A`) appears only for a completed session. There are no gradients, anywhere. There is no purple, ever.

**Type.** Two families: **JetBrains Mono** for UI, numerals, labels, and most body copy; **Newsreader** (a serif) for marketing headlines and long-form prose only. The timer numerals are mono, weight 500, tracked −4%. Mono labels are uppercase, weight 600, tracked +6%.

**Backgrounds.** Solid paper. No imagery, no patterns, no textures, no noise, no gradients, no full-bleed photography. The marketing site's hero is a single oversized timer on paper — that's the product shot.

**Animation.** Sparse and short. `80ms` for button press, `160ms` for hover, `320ms` for state changes. Easing is always `cubic-bezier(0.2, 0, 0, 1)` (a fast-out, settled-in curve). No bounces, no spring physics, no celebratory animation. The timer numerals do not animate as they tick — the digit changes are instant.

**Hover.** Background shifts one step on the paper scale (`--paper` → `--paper-2`). Never an opacity change, never a color hue shift. Buttons get `--paper-3` on hover.

**Press.** The keycap visual moves down 1px and loses its bottom shadow stripe. Buttons darken to `--paper-3`. Nothing scales. Nothing rotates.

**Borders.** Hairline (`1px`) ink-colored borders are the primary structural element — they replace shadows entirely. The active/focused state is `2px` ink, never a colored ring. Soft dividers between minor sections are `1px` `--rule-soft`.

**Shadows.** None. The system has no `box-shadow` other than the keycap's bottom-border trick.

**Capsules vs. gradients.** No protection gradients. Use a solid `--paper` capsule with hairline border if something needs to float on imagery (which it shouldn't, since there's no imagery).

**Layout.** 8px grid with a 4px half-step. Hairline rules separate every region. Content is left-aligned. Generous whitespace — the timer occupies a single screen with nothing else competing. Fixed elements (the keyboard hint bar) sit at the bottom edge with a top hairline rule.

**Transparency / blur.** Never. There is nothing to obscure.

**Imagery.** None in the app. The marketing site uses one black-and-white halftone of an actual tomato (or a line drawing — substitution allowed) and nothing else. No stock photography. No illustrations of people working.

**Corner radius.** `0` everywhere except inputs (`2px`) and keycaps (`3px`). Pill radius (`999px`) is reserved for the running-timer status chip and nothing else.

**Cards.** Hairline border, no rounding, no shadow, no padding less than `--s-5` (24px). A card is just a bordered region — there is no elevated/floating treatment.

**Iconography.** See ICONOGRAPHY section below.

## ICONOGRAPHY

The system uses **Lucide icons** at `1.5px` stroke, `20px` size by default. Lucide is loaded from CDN (`unpkg.com/lucide-static`) and only ~6 icons are ever used: `play`, `pause`, `square` (stop), `skip-forward`, `bell`, `check`. No icon ever appears without a text label adjacent — icons are mnemonics, never replacements for words.

**No emoji.** Anywhere. Not in copy, not in UI, not in error states.

**No unicode-as-icons** (no `▶`, no `■`, no `⏱`). Use the Lucide SVG.

**The wordmark** is set in JetBrains Mono, weight 700, with a small filled square (3×3px, `--tomato`) flush-baseline to the right of the final `o`. That square is the entire visual identity. It is the favicon. It is the loading indicator. It is what blinks on the menubar.

**No mascot, no character.** A drawn tomato character would violate the brand. If imagery is required (rare), use a high-contrast halftone or single-line drawing, never a cartoon.

**Substitution flag.** This system uses Lucide via CDN as a stand-in. If a real Tomato product is built, commission a custom 6-icon set at the same stroke weight. Lucide is the right shape but the wrong soul.

**Font substitution flag.** No custom fonts were provided. JetBrains Mono and Newsreader are loaded from Google Fonts as the closest free matches to the intended voice (a precise mono and a quiet, literary serif). If the user has license to a paid alternative (e.g. Söhne Mono, Tiempos), swap them at the `--font-mono` and `--font-serif` vars.

## Caveats

- All visual decisions are derived from the brief, not from existing product. They will need a pass against any real implementation.
- Lucide icons are a CDN substitution; a real Tomato should ship its own.
- The "halftone tomato" hero image is a placeholder; the system describes how it should look but the file is left intentionally blank for the user to provide.
