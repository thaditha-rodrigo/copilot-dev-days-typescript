import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div
      className="flex flex-col min-h-full"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #1e1000 0%, #0d0d0d 70%)' }}
    >
      {/* Header */}
      <header
        className="flex items-center justify-between px-3 py-2"
        style={{
          background: 'linear-gradient(180deg, #1a1200 0%, #0d0d0d 100%)',
          borderBottom: '1px solid #9b7535',
          boxShadow: '0 2px 12px rgba(155, 117, 53, 0.15)',
        }}
      >
        <button
          onClick={onReset}
          className="text-sm px-3 py-1.5 rounded transition-all duration-150 active:scale-95"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#c49a3c',
            border: '1px solid #9b7535',
            background: 'rgba(155, 117, 53, 0.1)',
            letterSpacing: '0.05em',
          }}
        >
          ← Retreat
        </button>
        <h1
          className="text-base font-bold text-fire-gold"
          style={{ fontFamily: 'var(--font-display)', textShadow: '0 0 10px rgba(245,159,0,0.6)' }}
        >
          Soc Ops
        </h1>
        <div className="w-20" />
      </header>

      {/* Instructions */}
      <p
        className="text-center text-parchment-dim text-xs py-2 px-4"
        style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.03em' }}
      >
        Mark a square when you find your quarry.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div
          className="text-center py-2 font-bold text-sm tracking-widest"
          style={{
            fontFamily: 'var(--font-heading)',
            background: 'linear-gradient(90deg, transparent, #3d1f00, #5a2d00, #3d1f00, transparent)',
            color: '#f59f00',
            borderTop: '1px solid #e8590c',
            borderBottom: '1px solid #e8590c',
            textShadow: '0 0 12px #f59f00',
            animation: 'ember-glow 2s ease-in-out infinite',
          }}
        >
          🔥 A Line of Fire! Victory is near! 🔥
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
