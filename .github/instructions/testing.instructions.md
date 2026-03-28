---
applyTo: "**/*.test.ts"
description: "Conventions for writing unit tests. Use Vitest with describe/it blocks, co-locate tests next to source files, use import type for type-only imports."
---

# Testing Conventions

## Framework
- Vitest with globals enabled (describe, it, expect available without import)
- Explicit imports preferred: `import { describe, it, expect, vi } from 'vitest'`
- Test setup in src/test/setup.ts extends matchers from @testing-library/jest-dom

## File Placement
- Co-locate test files next to source: bingoLogic.ts -> bingoLogic.test.ts
- Name pattern: module.test.ts (not .spec.ts)

## Structure
- Nest describe blocks by function/feature, then individual it cases
- Use beforeEach for shared test fixtures; never share mutable state across tests
- Prefer small focused assertions over large compound checks

## Pure Logic Tests
- Game logic in src/utils/ has no React or DOM dependencies
- Test environment is node (not jsdom); do not use DOM APIs
- Import from the source module directly
- Use `import type` for type-only imports

## Mocking
- Use vi.spyOn() for spying on existing methods (e.g., Math.random)
- Restore mocks in afterEach or use vi.restoreAllMocks()
- Avoid mocking modules unless absolutely necessary

## Board Test Helpers
- generateBoard() always returns 25 squares; index 12 is the free space
- Use toggleSquare(board, id) to create marked states for bingo detection tests
- checkBingo() returns BingoLine or null; assert the shape, not just truthiness

## Commands
- npm run test: run all tests once
- npx vitest --watch: watch mode during development
- npx vitest run path/to/file: run a specific test file