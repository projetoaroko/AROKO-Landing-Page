export function Ticker() {
  const text =
    'SALVADOR · MODA · DANÇA · DIÁLOGO · 20 AGO 2026 · SALVADOR · MODA · DANÇA · DIÁLOGO · 20 AGO 2026 · SALVADOR · MODA · DANÇA · DIÁLOGO · 20 AGO 2026 · SALVADOR · MODA · DANÇA · DIÁLOGO · 20 AGO 2026 · ';

  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#d83a22] py-[11px]">
      <div className="inline-block animate-ticker">
        <span
          className="font-bold text-white px-6"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '11px',
            letterSpacing: '.18em',
            textTransform: 'uppercase',
          }}
        >
          {text}
        </span>
        <span
          className="font-bold text-white px-6"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '11px',
            letterSpacing: '.18em',
            textTransform: 'uppercase',
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
