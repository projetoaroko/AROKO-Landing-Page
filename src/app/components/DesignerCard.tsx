import { Lock } from 'lucide-react';
import type { CSSProperties } from 'react';

interface DesignerCardProps {
  name: string;
  image: string;
  delay?: number;
}

export function DesignerCard({ name, image, delay = 0 }: DesignerCardProps) {
  return (
    <div
      className="designer-card cursor-pointer"
      data-reveal="up"
      style={{ '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      <div className="aspect-[4/5] bg-[#E8E4DE] flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="designer-card-image w-full h-full object-cover"
        />
      </div>
      <div className="designer-card-meta flex items-center justify-between border-b-[1.5px] border-[#D9D4CC] pb-2.5 mt-4">
        <p
          className="designer-card-title font-bold uppercase text-[#b0a99f]"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '10px',
            letterSpacing: '.16em',
          }}
        >
          {name}
        </p>
        <div
          className="flex-1 h-px mx-2.5"
          style={{
            background:
              'repeating-linear-gradient(90deg, #D9D4CC 0, #D9D4CC 4px, transparent 4px, transparent 8px)',
          }}
        />
        <Lock size={13} strokeWidth={2.5} className="text-[#b0a99f] flex-shrink-0" />
      </div>
    </div>
  );
}
