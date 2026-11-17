# Portfolio

Personal portfolio inspired by the Argentine flag and *fileteado porteño*, the traditional ornamental art of Buenos Aires.

## Stack

Plain HTML, CSS and JavaScript — no frameworks, no build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Structure

```
├── index.html
├── assets/
│   ├── icons/        # custom cursor
│   ├── img/          # profile photo
│   └── ornaments/    # fileteado SVG ornaments
├── css/
│   ├── base.css      # design tokens, reset, background
│   ├── menu.css      # home screen and main menu
│   ├── modal.css     # reusable modal component
│   └── sections.css  # About / Work / Contact content
└── js/
    └── modal.js      # modal open/close + shareable URL hash
```
