# Tomato App

The timer. Open `index.html`.

**Keys**
- `Space` — start / pause
- `Esc` — stop · or close any overlay
- `→` — skip break (only during a break)
- `⌘K` — command palette
- `?` — keyboard reference overlay
- `1` `2` `3` — start a 25 / 50 / 90 minute pomodoro
- `⇧B` — start a long (15 min) break

Breaks are automatic: when a focus session ends, the app auto-switches to a 5-minute break (background goes dark). When the break ends, it returns to idle.

Components:
- `Timer.jsx` — the big display + status chip
- `KeyBar.jsx` — bottom-fixed shortcut bar
- `SessionTracker.jsx` — today's pomodoro count + ticks
- `CommandPalette.jsx` — ⌘K overlay
- `HelpOverlay.jsx` — ? overlay
- `TaskField.jsx` — the single optional input
