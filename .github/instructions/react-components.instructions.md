---
applyTo: "src/components/**"
description: "Conventions for React components in the Soc Ops bingo game. Use named exports, Tailwind v4 utility classes, proper aria attributes, and type-only imports."
---

# React Component Conventions

## Exports and Naming
- Named exports only (no default exports except App.tsx)
- One component per file, filename matches component name
- Props interfaces defined in the same file, named ComponentNameProps

## TypeScript
- Use `import type` for type-only imports (enforced by verbatimModuleSyntax)
- Import shared types from `../types`
- Define prop interfaces inline above the component, not in types/index.ts

## Styling
- Tailwind CSS v4 utility classes only (no CSS modules, no inline style props)
- Custom colors defined in src/index.css via @theme (bg-marked, border-marked-border, color-accent)
- Build class strings with template literals; use conditional ternaries for state-based classes
- No classnames/clsx library

## Accessibility
- Interactive elements use `<button>` with aria-pressed and aria-label
- Disable buttons that should not be clickable (disabled={square.isFreeSpace})
- Use semantic HTML elements (header, main, nav)

## State and Props
- Components are stateless presentational; all game state lives in useBingoGame hook
- Pass callbacks as props (onSquareClick, onReset, onDismiss)
- Avoid useEffect or local state unless strictly UI-scoped (e.g., animation)

## Component Hierarchy
- App owns useBingoGame hook, routes between StartScreen and GameScreen
- GameScreen renders BingoBoard (grid) and BingoModal (win overlay)
- BingoBoard maps over the flat 25-square array to render BingoSquare buttons