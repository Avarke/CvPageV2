# CV Page V2

A page for my CV built just as i want it. The page uses custom fonts and japanese typography. The project was coded by hand, the assets like the videos and photos were also custom made/edited. 

## Features

- Responsive single-page layout for desktop and mobile
- Rotating full-screen photography background
- Animated drawers for experience, projects, hobbies, and education
- Downloadable English and Lithuanian CVs, certificate, and recommendation
- Copy-to-clipboard contact details
- LinkedIn and GitHub profile links
- Locally bundled portfolio images, videos, documents, and custom fonts

## Built with

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) `20.19+` or `22.12+`
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/Avarke/CvPageV2.git
cd CvPageV2
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot module replacement |
| `npm run build` | Type-check the project and create a production build in `dist/` |
| `npm run lint` | Run Oxlint against the project |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
CvPageV2/
├── public/                 # Favicon and public assets
├── src/
│   ├── assets/             # Photos, videos, fonts, and downloadable PDFs
│   ├── components/         # Reusable UI and drawer components
│   ├── App.tsx             # Portfolio content and main page composition
│   ├── index.css           # Tailwind setup, fonts, and theme styles
│   └── main.tsx            # React application entry point
├── index.html
├── package.json
└── vite.config.ts
```

## Customizing the portfolio

Most of the portfolio copy, links, skill labels, and section content live in `src/App.tsx`. Replace media and downloadable documents in `src/assets/`, then update the corresponding imports.
Background images are loaded automatically from `src/assets/background/` with Vite's `import.meta.glob`, so adding an image to that directory includes it in the carousel without another import.
Global typography, custom font declarations, and theme values are defined in `src/index.css`. Reusable interface elements are kept in `src/components/`.

## Production build

```bash
npm run build
npm run preview
```

The generated `dist/` directory can be deployed to any static hosting provider.
