interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      style={{ background: 'rgba(0, 0, 0, 0.85)' }}
    >
      <div
        className="max-w-xs w-full text-center rounded-xl p-7"
        style={{
          background: 'linear-gradient(160deg, #1e1200 0%, #0f0900 60%, #1a1000 100%)',
          border: '1px solid #9b7535',
          boxShadow:
            '0 0 40px rgba(232, 89, 12, 0.4), 0 0 80px rgba(155, 117, 53, 0.2), inset 0 1px 0 rgba(196, 154, 60, 0.2)',
          animation: 'modal-rise 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        }}
      >
        {/* Ornament */}
        <div className="flex items-center gap-3 mb-5 justify-center">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-bronze" />
          <span className="text-2xl" style={{ textShadow: '0 0 12px #f59f00' }}>🐺</span>
          <div className="h-px flex-1 bg-linear-to-l from-transparent to-bronze" />
        </div>

        <h2
          className="text-4xl font-black mb-2 ember-glow"
          style={{
            fontFamily: 'var(--font-display)',
            background: 'linear-gradient(180deg, #ffcc33 0%, #f59f00 50%, #e8590c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          BINGO!
        </h2>

        <p
          className="text-parchment-dim text-base mb-6 italic"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          "A witcher never misses their mark."
        </p>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, #9b7535)' }} />
          <span className="text-bronze text-sm">✦</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, #9b7535, transparent)' }} />
        </div>

        <button
          onClick={onDismiss}
          className="w-full font-bold py-3 px-6 rounded-lg transition-all duration-150 active:scale-95"
          style={{
            fontFamily: 'var(--font-heading)',
            background: 'linear-gradient(135deg, #b03d00 0%, #e8590c 50%, #f59f00 100%)',
            color: '#0d0d0d',
            boxShadow: '0 0 16px rgba(232, 89, 12, 0.5)',
            letterSpacing: '0.08em',
          }}
        >
          ⚔ Continue the Hunt
        </button>
      </div>
    </div>
  );
}
