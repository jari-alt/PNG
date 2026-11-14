# Design decisions vs papua-explorer.com

Reference analyzed: [papua-explorer.com](https://www.papua-explorer.com/) (Home, Private Tours, Baliem Valley Resort, inquiry pattern).

## What we mirrored (structure / feel)

| Pattern | Papua Explorer | Insect Hunters Town |
| --- | --- | --- |
| Brand-forward hero | Large operator name + destination pitch | Hero-Marke „Insect Hunters Town“ dominant, dann eine Headline + ein Satz + CTAs |
| Clear top nav | Tours / Lodge / Contact | Start, Lodge, Touren, Individuell, Über uns, Anfrage |
| Tour cards with duration | „X Days / Y Nights“ | „X Tage / Y Nächte“ (inkl. Festivals Special) |
| Lodge showcase | Eco-lodge band + gallery teaser | Lodge-Band mit Galerie-Platzhaltern, eigene Lodge-Seite |
| Inquiry CTA | Contact form + email | Formular → `mailto:` (Name, E-Mail*, Nachricht) |
| Adaptability note | „every programme can be adapted“ | Badge / Hinweis „Anpassbar auf Anfrage“ auf jeder Tour |
| Footer disclaimer tone | Practical travel caveats | Wetter / Straßen / Unvorhersehbares — keine Ablauf-Garantie |

## What we simplified

- **One place only:** Mindima / Chimbu — no Raja Ampat, no multi-region split.
- **Lighter content:** fewer tour variants, placeholder copy instead of long day-by-day itineraries.
- **No prices** anywhere (reference shows USD on many cards).
- **No online booking** — inquiry only.
- **No external lodge site link** (reference points to Baliem Valley Resort separately).

## Visual direction (deliberately not a clone)

Papua Explorer leans charcoal UI, warm orange accent (`#ba5c12`), and light cream surfaces. That cream + terracotta look is a common AI-design cliché, so we kept the *operator-site structure* but chose a **highland mist** palette:

- Deep forest greens (`#0b1511` / `#14241c`)
- Moss / leaf accents (`#2f6b4f`, `#4f9a6e`)
- Soft gold highlight (`#c9a24a`) — not terracotta
- Misty sage backgrounds with soft gradients (not flat white, not cream-paper)

Typography: **Fraunces** (expressive display / brand) + **Outfit** (UI body) — not Inter / Roboto / Arial.

Motion (3):

1. Hero staggered fade-up for brand / headline / CTAs  
2. Scroll-triggered section reveals  
3. Tour-card hover lift + subtle mist drift on the hero  

## Tech choice

Empty repo → plain static HTML/CSS/JS, multi-page, no framework. Easy to host on GitHub Pages or any static host; matches a lightweight lodge site better than a SPA.
