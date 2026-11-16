# adeebali.com

The code for my personal website. Intended to host my professional resume, link to my projects, and have a markdown blog.

[![Node.js CI](https://github.com/AdeebAli/adeebali.com/actions/workflows/nodejs.yml/badge.svg)](https://github.com/AdeebAli/adeebali.com/actions/workflows/nodejs.yml)

## Getting Started

### Requirements

- Node >= 24

### Installation

```sh
npm install
```

### Scripts

| Script              | What it does                                                                  |
| ------------------- | ----------------------------------------------------------------------------- |
| `npm run dev`       | Start and run the server in development mode with HMR                         |
| `npm run build`     | Creates production build into `/.next`                                        |
| `npm start`         | Starts Next.js in production mode. Needs `npm run build` first.               |
| `npm run typecheck` | Typechecks the application using tsc. No output files generated               |
| `npm run lint`      | Lints the project using eslint. runs on all ts/tsx files in `src/` directory` |
| `npm test`          | Runs test files using`jest`                                                   |

## Project Infrastructure

### Hosting

Hosted on Vercel using Vercel Functions/Fluid and their global CDN for static assets and caching.

### Domain

Registered through `Namecheap`.

### Emails

Email forwarding powered by `ImprovMX`.

### Styling and Theming

- This project is powered by `ChakraUI` for all styling and theming. Using Chakra allows me to focus on content - and less on repetitive component and theme styling.

- App supports light/dark mode through Chakra's `useColorMode` hook. In order to use Chakra's theme and color modes, the app needs to be wrapped in `<ChakraProvider/>` in `src/pages/_app.tsx`. Color mode preferences are stored in `localStorage` under the `theme` key, and the color mode script to load in and out of localStorage is used in `src/pages/_document.tsx` as `<ColorModeScript>`.

### NextJS Setup

NextJS using Pages Router. Long term, the goal of this project is to move to the newer app router, per Vercel's guidance for modern Next.js applications.
