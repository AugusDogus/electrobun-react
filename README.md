# Electrobun React Template

A modern React-powered desktop application template built with Electrobun

## What You'll See

This template demonstrates:
- **React 18**: Modern React with hooks, state management, and TypeScript
- **Native Desktop**: Cross-platform desktop window with native performance
- **Interactive Components**: Counter, todo list, and real-time clock examples
- **Modern Development**: Hot module replacement and fast Bun runtime
- **Clean Architecture**: Separation between main process and React UI

## Getting Started

1. Install dependencies:
   ```bash
   bun install
   ```

2. Run in development mode:
   ```bash
   bun run dev
   ```

3. Build for production:
   ```bash
   bun run build
   ```

## Project Structure

```
src/
├── bun/
│   └── index.ts           # Main process - creates and manages windows
└── mainview/
   ├── App.tsx             # Main React component
   ├── components/
   │   └── FeatureDemo.tsx # Interactive React demo component
   ├── index.html          # HTML template
   ├── index.css           # Global styles
   └── index.tsx           # React app entry point
```

## Tech Stack

- **[Electrobun](https://electrobun.dev)** - Desktop app framework
- **[React 18](https://react.dev)** - Modern UI library with hooks
- **[TypeScript](https://typescriptlang.org)** - Type-safe JavaScript
- **[Bun](https://bun.sh)** - Lightning-fast all-in-one JavaScript runtime, bundler, test runner, and package manager