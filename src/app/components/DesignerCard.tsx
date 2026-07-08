import { Lock } from 'lucide-react';
import type { CSSProperties } from 'react';

interface DesignerCardProps {
  name: string;
  image: string;
  bio?: string;
  instagram?: string;
  instagramLink?: string;
  delay?: number;
}

export function DesignerCard({ name, image, bio, instagram, instagramLink, delay = 0 }: DesignerCardProps) {
  const handleImageClick = () => {
    if (instagramLink) {
      window.open(instagramLink, '_blank');
    }
  };

  return (
    <div
      className="designer-card"
      data-reveal="up"
      style={{ '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      <div 
        className={`aspect-[4/5] bg-[#E8E4DE] flex items-center justify-center overflow-hidden ${instagramLink ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
        onClick={handleImageClick}
      >
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
      {bio && (
        <div className="mt-3">
          <p
            className="text-[#5f5951] leading-relaxed"
            style={{
              fontSize: '13px',
              lineHeight: '1.5',
            }}
          >
            {bio}
          </p>
          {instagram && (
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[#d83a22] font-semibold hover:text-[#b0a99f] transition-colors"
              style={{
                fontSize: '12px',
              }}
            >
              {instagram}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
