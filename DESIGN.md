# RBCyber Design Direction — "Cipher Flow"

## The gut-check first

The two defaults this brief could easily collapse into: (1) black background,
monospace everything, matrix-green text — the "hacker movie" cliché; or (2) a
flat near-black page with one acid-green or red accent dropped on top, no real
identity beyond "dark mode." Neither says anything specific about _this_ club.

The angle that's actually specific to a cybersecurity club: security is about
**structure** (encryption, protocols, defense) constantly meeting **flow**
(data in motion, traffic, streams being intercepted or protected). "Flowy" in
the brief is the key word — it's asking for something that moves like data,
not something that just sits there looking techy. So the design leans on that
tension: a rigid technical grid with fluid, gradient motion running through
and behind it, like encrypted traffic flowing across a network diagram.

---

## Color — "Cipher Flow" palette (blue-emphasis revision)

Revised per direction: this is the club's actual color, so blue carries the
whole identity rather than sharing the spotlight with a second hue. The
"flow" now comes from _depth and luminance_ within one blue family — moving
from deep, almost-black indigo up to a bright electric pop — rather than
blending two different hues together. That's a more disciplined move than
the original cyan/violet pairing, and it keeps every "blue" on the page
reading as unmistakably the club's color.

| Token             | Hex       | Role                                                                            |
| ----------------- | --------- | ------------------------------------------------------------------------------- |
| `--color-void`    | `#050810` | Base background — near-black with a cool blue undertone, not neutral gray-black |
| `--color-surface` | `#0D1520` | Card/panel surfaces, one step up from the void                                  |
| `--color-deep`    | `#123A73` | Deep blue — used in the gradient's low end, borders, quiet dividers             |
| `--color-signal`  | `#2F7BFF` | The pop — vivid electric blue for CTAs, active states, key links                |
| `--color-glow`    | `#7FB2FF` | Lightest blue — hover states, glow edges, the brightest point in any gradient   |
| `--color-paper`   | `#EAF0F7` | Primary text — cool-tinted off-white, not stark white                           |
| `--color-mist`    | `#7C8896` | Secondary/muted text, captions                                                  |

No amber, no violet — blue does all the work here. "Popping" is achieved by
_contrast against the near-black void_, not by introducing a second color:
`--color-signal` and `--color-glow` only appear on small, deliberate
elements (a button, an active nav dot, a headline underline-in-motion), so
they read as bright precisely because the void around them stays so dark
and quiet.

## Old palette (superseded, kept for reference)

| Token                   | Hex       | Role                                                           |
| ----------------------- | --------- | -------------------------------------------------------------- |
| `--color-stream-cyan`   | `#46E1C6` | (removed — replaced by blue-only signal/glow)                  |
| `--color-stream-violet` | `#6C63FF` | (removed — replaced by blue-only signal/glow)                  |
| `--color-signal-amber`  | `#FFAD5C` | (removed — no secondary accent hue in blue-emphasis direction) |

## Typography

- **Display — Space Grotesk**: geometric, slightly unconventional letterforms.
  Used at large sizes for headlines only, set wide and confident. Avoids both
  the generic high-contrast serif and the equally generic "hacker monospace
  headline" move.
- **Body — Inter**: quiet, highly legible, does the actual reading work.
- **Utility/data — JetBrains Mono**: used deliberately and narrowly — for
  actual data-shaped content (event dates, member counts, code snippets, the
  "Guest"/role label in the corner). Monospace becomes a signal ("this is
  data") rather than a blanket aesthetic slapped on everything.

## Layout concept

```
┌──────────────────────────────────────────────┐
│ [logo]                              [avatar] │  <- thin, glass-like top bar
│                                                │
│         RANCHO BERNARDO CYBERSECURITY CLUB    │  <- hero, large Space Grotesk
│         a flowing gradient mesh drifts         │
│         behind the headline, slow + ambient    │
│                                                │
│         [ join the club ]  [ view events ]     │
└──────────────────────────────────────────────┘
```

The hero _is_ the signature moment: a flowing mesh in blue tones — deep
`--color-deep` folding into bright `--color-glow` — drifts slowly behind the
headline, like traffic moving across a monitored network. It's the same
canvas node-network technique already built for the app, re-themed to a
single blue gradient instead of two hues, and content sections below sit on
flat `--color-surface` panels so the flow reads as atmosphere, not
decoration competing with the text.

No numbered "01 / 02 / 03" markers — the club's content (mission, events,
join) isn't a sequence, so numbering would be decorative rather than
informative. If a future page presents an actual ordered path (like a CTF
skill-tree or a step-by-step onboarding), that's the one place numbering
would earn its place.

## Motion

One orchestrated moment, not scattered effects:

- The hero's gradient mesh flows continuously but slowly (ambient, not
  attention-grabbing)
- On page load, the headline resolves in from a slight blur/decrypt-style
  reveal — a single deliberate moment, not looped or repeated
- Hover states shift `--color-signal` toward `--color-glow` — motion is
  reserved for things that are actually interactive
- `prefers-reduced-motion` freezes the mesh to a still frame and disables the
  load-in reveal

## Restraint check

The one bold move is the flowing blue gradient mesh hero. Everything else —
surfaces, type scale, spacing — stays quiet and disciplined so that move
lands. There's no second accent hue to manage or overuse: restraint here
means keeping `--color-signal`/`--color-glow` rare enough that the void
around them is what makes them pop, not a competing color.
