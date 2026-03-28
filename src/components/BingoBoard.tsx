import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div
      className="grid grid-cols-5 gap-1.5 w-full max-w-md mx-auto aspect-square p-3 rounded-lg"
      style={{
        background: 'linear-gradient(135deg, #1a1200 0%, #0f0a00 100%)',
        border: '2px solid #9b7535',
        boxShadow:
          '0 0 30px rgba(155, 117, 53, 0.25), 0 0 60px rgba(232, 89, 12, 0.1), inset 0 0 20px rgba(0,0,0,0.5)',
      }}
    >
      {board.map((square) => (
        <BingoSquare
          key={square.id}
          square={square}
          isWinning={winningSquareIds.has(square.id)}
          onClick={() => onSquareClick(square.id)}
        />
      ))}
    </div>
  );
}
