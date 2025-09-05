# create-electrobun-react

> [!IMPORTANT]  
> This repository is still very much in progress. Expect breaking changes and incomplete features as development continues.

A starter template for building desktop applications with Electrobun and React. It provides a solid foundation with modern tooling and best practices out of the box.

## Installation

There are two ways to scaffold an app using the `create-electrobun-react` starter:

### 1. Use this repository as a template

Simply press the <kbd>Use this template</kbd> button on [GitHub](https://github.com/AugusDogus/create-electrobun-react) and clone your newly created repository locally.

### 2. Clone this repository

```bash
git clone https://github.com/AugusDogus/create-electrobun-react.git
cd create-electrobun-react
bun install
```

### 3. Install dependencies and run

```bash
# Install dependencies
bun install

# Start the development server
bun run dev

# Build for production
bun run build
```

## What's inside?

This starter includes tooling and configurations for:

- **[Electrobun](https://electrobun.dev)** - Cross-platform desktop app framework
- **[React 18](https://react.dev)** - Modern UI library with hooks and concurrent features
- **[TypeScript](https://typescriptlang.org)** - Static type checking for JavaScript
- **[Bun](https://bun.sh)** - Fast all-in-one JavaScript runtime and package manager

### Apps and Packages

- `src/bun`: Main Electrobun process that creates and manages desktop windows
- `src/mainview`: React application with TypeScript and modern component patterns

### Features

- 🚀 **Fast Development** - Hot module replacement with Bun's lightning-fast bundler
- 🎯 **Type Safety** - Full TypeScript support across the entire application
- 🏗️ **Modern React** - Hooks, functional components, and React 18 features
- 🖥️ **Native Desktop** - Cross-platform desktop application with native performance
- 📦 **Zero Config** - Sensible defaults with the ability to customize when needed

## Project Structure

```
src/
├── bun/
│   └── index.ts           # Main process - window management and app lifecycle
└── mainview/
   ├── App.tsx             # Root React component
   ├── components/
   │   └── FeatureDemo.tsx # Example interactive components
   ├── index.html          # HTML shell
   ├── index.css           # Global styles
   └── index.tsx           # React app entry point
```

## Development

### Prerequisites

- **Bun** - This project uses Bun as the JavaScript runtime. [Install Bun](https://bun.sh/docs/installation)

### Available Scripts

```bash
# Start development server with hot reload
bun run dev

# Build for production
bun run build

# Type check the project
bun run type-check

# Run tests (when added)
bun test
```

## Building Your App

This template provides a solid foundation for building desktop applications. You can:

1. **Add new React components** in `src/mainview/components/`
2. **Extend the main process** in `src/bun/index.ts` for native integrations
3. **Add styling** with CSS modules, styled-components, or your preferred solution
4. **Integrate APIs** using Electrobun's built-in capabilities

## Deployment

When you're ready to distribute your app:

1. Run `bun run build` to create a production build
2. Use Electrobun's packaging tools to create platform-specific installers
3. Distribute your application through your preferred channels

## Learn More

- [Electrobun Documentation](https://electrobun.dev/docs/guides/getting-started) - Learn about desktop app development
- [React Documentation](https://react.dev) - Learn React fundamentals and advanced patterns
- [Bun Documentation](https://bun.sh/docs) - Explore Bun's features and capabilities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.