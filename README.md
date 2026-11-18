# Portfolio

Personal portfolio inspired by the Argentine flag and *fileteado porteño*, the traditional ornamental art of Buenos Aires.

Live at **[nickbustos.github.io](https://nickbustos.github.io)**.

## Stack

Plain HTML, CSS and JavaScript — no frameworks, no build step.

- **Spotify iFrame API:** lazy-loaded player with playback state sync (the vinyl spins while the track plays).
- **Native `<dialog>`** modals with shareable URL hashes.
- **Data-driven project cards** rendered from a plain JS data file.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Structure

```
├── index.html
├── assets/
│   ├── docs/         # downloadable resume (PDF)
│   ├── icons/        # custom cursor
│   ├── img/          # profile photo
│   ├── ornaments/    # fileteado SVG ornaments
│   └── video/        # project gameplay clips
├── css/
│   ├── base.css      # design tokens, reset, background
│   ├── menu.css      # home screen and main menu
│   ├── modal.css     # reusable modal component
│   ├── sections.css  # About / Work / Contact content
│   └── music.css     # floating music player
└── js/
    ├── data/
    │   └── projects.js  # project list shown in "My work"
    ├── projects.js      # renders the project cards
    ├── modal.js         # modal open/close + shareable URL hash
    └── music.js         # Spotify player, loaded on first click
```
