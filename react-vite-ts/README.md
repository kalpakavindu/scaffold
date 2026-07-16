# React + Vite + TypeScript Template

React + TypeScript and Vite based template for frontend web projects.

## Project structure

```text
workspace
├── public
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   └── svgs
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.scss
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── contexts
│   │   ├── ThemeContext
│   │   │   ├── ThemeContext.ts
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── hooks
│   │   └── main.scss
│   ├── utils
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   ├── scss
│   │   └── main.scss
│   ├── routes
│   │   ├── pages
│   │   │   ├── HomePage
│   │   │   │   ├── HomePage.tsx
│   │   │   │   ├── HomePage.module.scss
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── Router.tsx
│   │   └── index.ts
│   └── main.tsx
├── index.html
├── postcss.config.js
├── eslint.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

Every component or page has it's own `.tsx` file and `.scss` file. The provider component of a context is implemented in a separate `.tsx` file with all of it's functions and the context definition and the hook is created in another `.ts` file and both files are stored in the same folder. `Router.tsx` file implement all the routing paths.

## In-Built Features

- Built-in theme context with dual mode theming support (You don't need this if you are planning to use tailwindcss).
- Built-in datetime and number format utility functions.
- Built-in hooks for access Local storage and Session storage.
- SCSS not CSS.
- Postcss included.
- React router configured.
- Alias `@` for `/src` directory.

## Development Setup

After scaffolding, create `.env` file and include following.

```env
VITE_SERVER_URI= // URI of the API

VITE_CLIENT_PORT= // Port to run Client
VITE_CLIENT_HOST= // Host to run Client
```

Then Install dependencies.

```bash
npm i # or
pnpm i # or
yarn i
```

Then Start the development server.

```bash
npm dev # If you ran `npm i`
npm dev # If you ran `npm i`
yarn dev # If you ran `yarn i`
```

