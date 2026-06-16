import { useRef } from 'react';
import { useRafParallax } from '../hooks/useRafParallax';

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useRafParallax(parallaxRef, { distance: 200, fadeDistance: 500 });

  return (
    <section
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ minHeight: '100svh', paddingTop: '52px' }}
    >
      <div ref={parallaxRef} className="hero-parallax absolute inset-0">
        <img
          loading="eager"
          className="hero-image absolute inset-0 w-full h-full object-cover"
          src="/aroko-mostra-passarela-vestidos-coloridos.jpg"
          alt="ÀROKÒ"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top,rgba(0,0,0,.92) 0%,rgba(0,0,0,.35) 45%,rgba(0,0,0,.15) 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 w-full pb-14 flex items-end justify-between gap-8 flex-wrap">
        <div className="flex items-end gap-4">
          <div
            className="hero-accent"
            style={{
              width: '3px',
              background: '#d83a22',
              marginBottom: '6px',
              flexShrink: 0,
            }}
          />
          <div>
            <h1
              className="logo-text epilogue-extrabold uppercase text-white"
              data-reveal="up"
              style={{
                fontSize: 'clamp(60px,11vw,136px)',
                lineHeight: 0.85,
              }}
            >
              ÀROKÒ
            </h1>
            <p
              className="text-white/60 italic mt-3"
              data-reveal="up"
              style={{
                fontSize: 'clamp(14px,1.5vw,18px)',
                letterSpacing: '.06em',
              }}
            >
              MOSTRA DE MODA AFRO-SOTEROPOLITANA
            </p>
          </div>
        </div>

        <div className="text-right" data-reveal="up">
          <p
            className="font-black text-white uppercase"
            style={{
              fontSize: 'clamp(22px,4vw,48px)',
              lineHeight: 1,
              letterSpacing: '0',
            }}
          >
            20 de Agosto
            <br />
            <span
              className="text-[#d83a22]"
              style={{ fontSize: 'clamp(18px,3vw,32px)' }}
            >
              Em Salvador
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
