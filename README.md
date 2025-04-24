# Revolution Fight Salo - Website

This is the official website for Revolution Fight Salo, a martial arts gym located in Salo, Finland. The website is hosted on GitHub Pages.

## Technology Stack

- Next.js - React framework
- TypeScript - Type-safe JavaScript
- Tailwind CSS - Utility-first CSS framework
- shadcn/ui - Component library built on Tailwind

## Website Structure

The website is designed as a **single-page scrollable site** with anchor navigation to the following sections:

- **Header** - Logo and navigation
- **Hinnasto** - Pricing information
- **Lajit** - Information about different martial arts offered
- **Harjoitusajat** - Training schedule
- **Yhteystiedot** - Contact information and location
- **Footer** - Social media links

## Project Structure

```
revolutionsalo.github.io/
│
├── public/ - Static assets (logos, images)
│   ├── logo-clean.jpg - Main logo
│   ├── logo-round.jpg - Round logo variant
│   ├── logo-black.jpg - Black logo variant
│   └── favicon.ico - Website favicon
│
├── src/
│   ├── app/ - Next.js App Router
│   │   ├── page.tsx - Single-page website with all sections
│   │   ├── globals.css - Global styles
│   │   └── layout.tsx - Root layout
│   │
│   └── components/ - UI components
│       └── ui/ - shadcn/ui components
│
├── build/ - Static export output (generated)
│
└── next.config.ts - Next.js configuration
```

## Development

To run the development server:

```bash
npm run dev
```

## Deployment

The website is built as a static export and hosted on GitHub Pages:

1. Build the static site:
```bash
npm run build
```

2. Commit the changes including the `build` folder
3. Push to GitHub - the content in the build folder will be served by GitHub Pages

## Social Media Links

- Facebook: https://www.facebook.com/revolutionfightsalo
- Instagram: https://www.instagram.com/revolutionfight/
- TikTok: https://www.tiktok.com/@revolutionfight

## Support

For technical support with the website, contact the repository administrator.
