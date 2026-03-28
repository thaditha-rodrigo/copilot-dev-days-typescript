# Soc Ops — Project Guidelines

## Overview

Social Bingo ("Soc Ops") — a React game for in-person mixers. Players find people matching icebreaker questions on a 5×5 bingo board and tap squares to mark them. Five in a row wins.

## Build and Test

```
npm install        # Install dependencies
npm run dev        # Vite dev server at localhost:5173
npm run build      # tsc -b && vite build
npm run lint       # ESLint
npm run test       # Vitest (unit tests)
```

Deployment: GitHub Pages via `.github/workflows/deploy.yml` — builds app into `/game/` subfolder with workshop docs at root.

## Architecture

```
src/
├── App.tsx                  # Root: routes between StartScreen and GameScreen
├── index.css                # Tailwind v4 import + @theme tokens
├── components/
│   ├── StartScreen.tsx      # Landing page with rules
│   ├── GameScreen.tsx       # Game layout (header + board + status)
│   ├── BingoBoard.tsx       # 5×5 grid rendering
│   ├── BingoSquare.tsx      # Individual square (button with aria)
│   └── BingoModal.tsx       # Win celebration overlay
├── hooks/
│   └── useBingoGame.ts      # All game state + localStorage persistence
├── utils/
│   └── bingoLogic.ts        # Pure functions: generateBoard, toggleSquare, checkBingo
├── data/
│   └── questions.ts         # Icebreaker question pool (24+ strings)
└── types/
    └── index.ts             # BingoSquareData, BingoLine, GameState
```

**Data flow**: `App` → `useBingoGame` hook (owns all state) → passes props down to components. No context providers or external state libraries.

## Conventions

- **Tailwind CSS v4** via Vite plugin — no `tailwind.config` file. Custom colors defined in `src/index.css` using `@theme`. See `.github/instructions/tailwind-4.instructions.md`.
- **Pure game logic** in `src/utils/bingoLogic.ts` — no React imports, independently testable.
- **Types** exported from `src/types/index.ts` and re-exported from `bingoLogic.ts` for convenience.
- **Named exports** for all components and hooks (no default exports except `App`).
- **Strict TypeScript**: `strict: true`, `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`.
- **`type` imports**: Use `import type` for type-only imports (enforced by `verbatimModuleSyntax`).
- **Board model**: Flat array of 25 `BingoSquareData` objects — index 12 is always the free space.
- **Immutable updates**: `toggleSquare` returns a new array via `.map()`; never mutate board state.

## Workshop Context

The `workshop/` folder contains lab guides for Copilot Dev Days — these are read-only reference material, not application code.
