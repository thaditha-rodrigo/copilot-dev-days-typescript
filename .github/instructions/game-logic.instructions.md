---
applyTo: "src/utils/**"
description: "Conventions for pure game logic functions. No React imports, immutable updates, independently testable. Board is a flat array of 25 BingoSquareData objects with index 12 as the free space."
---

# Game Logic Conventions

## Purity
- No React imports in src/utils/ files
- Functions are pure: same input always produces same output (except generateBoard which uses Math.random)
- No side effects, no DOM access, no localStorage

## Board Model
- Flat array of 25 BingoSquareData objects (not a 2D grid)
- Index 12 is always the free space (center of 5x5 grid)
- Each square has: id (number), text (string), isMarked (boolean), isFreeSpace (boolean)

## Immutability
- toggleSquare returns a new array via .map(); never mutate the input board
- generateBoard creates a fresh array each call
- Spread operator for object updates: { ...square, isMarked: !square.isMarked }

## Type Exports
- Canonical types live in src/types/index.ts
- Re-export types from bingoLogic.ts for consumer convenience
- Always use `export type` for type-only re-exports

## Win Detection
- getWinningLines() returns all 12 possible lines (5 rows + 5 columns + 2 diagonals)
- checkBingo() returns the first complete BingoLine or null
- getWinningSquareIds() converts a BingoLine into a Set of square IDs

## Adding New Logic
- Export the function from bingoLogic.ts
- Add corresponding tests in bingoLogic.test.ts
- Keep the question pool in src/data/questions.ts (minimum 24 questions required)