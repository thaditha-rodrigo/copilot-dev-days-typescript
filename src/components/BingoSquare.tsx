import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const isFreeSpace = square.isFreeSpace;
  const isMarked = square.isMarked;

  let background: string;
  let borderStyle: string;
  let boxShadow: string;
  let textColor: string;
  let animationClass: string;

  if (isFreeSpace) {
    background = 'linear-gradient(135deg, #2a1400 0%, #1a0d00 100%)';
    borderStyle = '1px solid #9b7535';
    boxShadow = '0 0 12px rgba(245, 159, 0, 0.3), inset 0 0 8px rgba(155, 117, 53, 0.15)';
    textColor = '#f59f00';
    animationClass = 'flicker';
  } else if (isWinning) {
    background = 'linear-gradient(135deg, #3d2000 0%, #5a2d00 100%)';
    borderStyle = '1px solid #f59f00';
    boxShadow = '0 0 14px #f59f00, inset 0 0 10px rgba(245, 159, 0, 0.35)';
    textColor = '#ffcc33';
    animationClass = 'winning-blaze';
  } else if (isMarked) {
    background = 'linear-gradient(135deg, #3d1f00 0%, #2a1200 100%)';
    borderStyle = '1px solid #e8590c';
    boxShadow = '0 0 8px rgba(232, 89, 12, 0.5), inset 0 0 6px rgba(232, 89, 12, 0.2)';
    textColor = '#e8dcc8';
    animationClass = 'fire-pulse';
  } else {
    background = 'linear-gradient(135deg, #1e1408 0%, #160e04 100%)';
    borderStyle = '1px solid #4a3520';
    boxShadow = 'inset 0 1px 0 rgba(155, 117, 53, 0.1)';
    textColor = '#c4b59a';
    animationClass = '';
  }

  return (
    <button
      onClick={onClick}
      disabled={isFreeSpace}
      className={`relative flex items-center justify-center p-1 text-center rounded transition-all duration-200 select-none w-full h-full leading-tight active:scale-95 ${animationClass}`}
      style={{
        background,
        border: borderStyle,
        boxShadow,
        color: textColor,
        fontFamily: isFreeSpace ? 'var(--font-heading)' : 'var(--font-body)',
        fontSize: isFreeSpace ? '18px' : '10px',
      }}
      aria-pressed={isMarked}
      aria-label={isFreeSpace ? 'Free space' : square.text}
    >
      {isFreeSpace ? (
        <span style={{ textShadow: '0 0 8px #f59f00' }}>⚔</span>
      ) : (
        <span className="wrap-break-word hyphens-auto" style={{ fontSize: '10px', lineHeight: '1.2' }}>
          {square.text}
        </span>
      )}
      {isMarked && !isFreeSpace && (
        <span
          className="absolute top-0.5 right-0.5 text-ember"
          style={{ fontSize: '8px', textShadow: '0 0 4px #e8590c' }}
        >
          ⚔
        </span>
      )}
    </button>
  );
}
