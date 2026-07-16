import { Heart } from 'lucide-react';
import type { CSSProperties } from 'react';

export function FloatingButton() {
  const handleClick = () => {
    window.open('https://benfeitoria.com/projeto/projetoaroko?ref=SITE', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed left-6 bottom-6 z-50 flex items-center justify-center gap-2 px-4 py-3 bg-[#d83a22] text-white font-semibold rounded-full shadow-lg hover:bg-[#c72a12] hover:shadow-xl transition-all duration-300 hover:scale-105"
      style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '12px',
        letterSpacing: '.1em',
      }}
      title="Apoie o Projeto Àrokò"
    >
      <Heart size={16} fill="currentColor" />
      <span>APOIE O PROJETO</span>
    </button>
  );
}
