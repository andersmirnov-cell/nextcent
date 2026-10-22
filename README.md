# Nexcent — Landing Page

A responsive one-page landing site built with React, TypeScript and Tailwind CSS from the
free Figma community design
[_"Minimal Landing Page Design"_](https://www.figma.com/community/file/1222060007934600841/minimal-landing-page-design-website-home-page-design-agency-website-ui-design)
by [Muntasir Billah](https://www.figma.com/@itsmuntasirb).

## Features

- **Responsive layout** from 320px up to 1440px, based on the 1440px desktop design
- **Sticky header** that changes background on scroll, with an animated mobile menu
- **Hero slider** (Swiper) with fade effect, pagination and autoplay
- **Client logos marquee**: an endless CSS scroll that adapts its speed to the logo width and
  pauses on hover
- **Animated counters** that count up when the Achievements section scrolls into view
- **Subscribe form** with email validation and a success state
- **Accessibility**: semantic sections, labels for icon-only buttons and links, a keyboard-safe
  mobile menu, and support for `prefers-reduced-motion` (slider autoplay, marquee and
  counters turn off)
- Design tokens (colors, typography, shadows) defined once in the Tailwind theme

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Swiper](https://swiperjs.com/) for the hero slider
- [Font Awesome](https://fontawesome.com/) icons
- [Inter](https://fontsource.org/fonts/inter) variable font via Fontsource
- ESLint and Prettier

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
git clone git@github.com:andersmirnov-cell/nextcent.git
cd nextcent
npm install
npm run dev
```

Then open the local URL that Vite prints (usually http://localhost:5173).

## Scripts

| Command                | What it does                            |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the dev server with hot reload    |
| `npm run build`        | Type-check and build to `dist/`         |
| `npm run preview`      | Serve the production build locally      |
| `npm run lint`         | Run ESLint                              |
| `npm run format`       | Format all files with Prettier          |
| `npm run format:check` | Check formatting without changing files |

## Project structure

```
src/
├── App.tsx               # Page composition: all sections in order
├── main.tsx              # Entry point
├── assets/
│   ├── images/           # SVG and PNG assets exported from Figma
│   └── styles/index.css  # Tailwind import, theme tokens, marquee animation
├── components/           # Reusable UI: buttons, logo, navigation, marquee, counter, form, hooks
└── sections/             # Page sections: header, hero, clients, community, … footer
```

## Credits

- **Design:**
  [Minimal Landing Page Design | Website Home Page Design | Agency Website UI Design](https://www.figma.com/community/file/1222060007934600841/minimal-landing-page-design-website-home-page-design-agency-website-ui-design)
  by [Muntasir Billah](https://www.figma.com/@itsmuntasirb), licensed under
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes: the static design was
  turned into a responsive React website, with a hero slider, a scrolling client logo strip,
  animated counters, a mobile menu and small spacing adjustments.
- **Code:** [andersmirnov-cell](https://github.com/andersmirnov-cell)
- Text content is placeholder copy from the design.
