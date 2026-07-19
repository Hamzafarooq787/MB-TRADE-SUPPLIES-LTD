# MB Trade Supplies Ltd

Next.js website for MB Trade Supplies Ltd, converted from the original static
HTML pages into reusable React components with a single shared header and
footer.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see
the result.

## Pages

- `/` - Home
- `/services` - Services overview
- `/services/wholesale-drinks` - Wholesale Drinks Supply
- `/services/pre-packaged-chicken` - Pre-Packaged Chicken Supply
- `/about` - About Us
- `/contact` - Contact Us

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS, configured with the original design tokens (colors,
  spacing, typography) from the source HTML files
- Self-hosted Material Symbols icon font via the `material-symbols` package
- Shared `Header` and `Footer` components used across every page, including
  a working mobile navigation menu
