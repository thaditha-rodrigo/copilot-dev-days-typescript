interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-full p-6"
      style={{
        background:
          'radial-gradient(ellipse at 50% 30%, #2a1400 0%, #0d0d0d 70%)',
      }}
    >
      <div className="text-center max-w-sm w-full">
        {/* Sword divider top */}
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-bronze" />
          <span className="text-bronze-light text-xl">⚔</span>
          <div className="h-px flex-1 bg-linear-to-l from-transparent to-bronze" />
        </div>

        <h1
          className="text-4xl font-bold text-fire-gold mb-1 ember-glow flicker"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Soc Ops
        </h1>
        <p
          className="text-parchment-dim text-base mb-8 tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.25em' }}
        >
          Social Bingo
        </p>

        {/* Rules card */}
        <div
          className="rounded-lg p-5 mb-8 text-left"
          style={{
            background: 'linear-gradient(135deg, #1e160b 0%, #2a1e0f 100%)',
            border: '1px solid #9b7535',
            boxShadow: '0 0 20px rgba(155, 117, 53, 0.2), inset 0 1px 0 rgba(196, 154, 60, 0.15)',
          }}
        >
          <h2
            className="text-bronze-light text-sm tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Witcher's Code
          </h2>
          <ul className="text-parchment text-sm space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
            <li className="flex gap-3 items-start">
              <span className="text-ember mt-0.5 shrink-0">†</span>
              <span>Seek those whose deeds match the scrolls</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-ember mt-0.5 shrink-0">†</span>
              <span>Mark the square when you find your quarry</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-ember mt-0.5 shrink-0">†</span>
              <span>Five aligned — victory is yours</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 active:scale-95"
          style={{
            fontFamily: 'var(--font-heading)',
            background: 'linear-gradient(135deg, #b03d00 0%, #e8590c 50%, #f59f00 100%)',
            color: '#0d0d0d',
            boxShadow: '0 0 20px rgba(232, 89, 12, 0.5), 0 4px 12px rgba(0,0,0,0.5)',
            letterSpacing: '0.1em',
          }}
        >
          ⚔ Begin the Hunt ⚔
        </button>

        {/* Sword divider bottom */}
        <div className="flex items-center gap-3 mt-6 justify-center">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-bronze" />
          <span className="text-bronze-light text-xl">⚔</span>
          <div className="h-px flex-1 bg-linear-to-l from-transparent to-bronze" />
        </div>
      </div>
    </div>
  );
}
