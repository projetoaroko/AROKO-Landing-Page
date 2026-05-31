import { Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <>
      <section
        id="imprensa"
        className="w-full bg-[#1B1B1B] text-white py-20 md:py-28"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <div data-reveal="left">
            <h2
              className="font-extrabold uppercase text-white"
              style={{
                fontSize: 'clamp(2.5rem,5.5vw,4.5rem)',
                lineHeight: 0.96,
                letterSpacing: '0',
              }}
            >
              Assine Este
              <br />
              Manifesto.
            </h2>
            <p
              className="mt-6 text-white/55 leading-7 max-w-xl"
              style={{ fontSize: '14px' }}
            >
              Nós estamos moldando o futuro da moda em Salvador. Associe a sua
              empresa à força criativa da juventude negra e caminhe lado a lado
              com quem constrói a identidade da cidade. Entre em contato para
              receber a nossa proposta.
            </p>
          </div>
          <a
            href="mailto:projetoaroko@gmail.com"
            className="font-bold uppercase text-white hover:text-[#d83a22] transition-colors whitespace-nowrap border-b border-white/40 pb-1.5"
            data-reveal="right"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '10px',
              letterSpacing: '.16em',
            }}
          >
            Fale conosco →
          </a>
        </div>
      </section>

      <footer className="w-full bg-[#0f0f0f] text-white py-8">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p
            className="logo-text epilogue-extrabold uppercase text-white"
            style={{ fontSize: '20px' }}
          >
            ÀROKÒ
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/projetoaroko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={19} />
            </a>
            <a
              href="https://twitter.com/projetoaroko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white transition-colors"
              aria-label="X"
            >
              <Twitter size={17} />
            </a>
            <a
              href="https://tiktok.com/@projetoaroko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col md:text-right gap-1.5">
            <p
              className="text-white/40 uppercase"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '9px',
                letterSpacing: '.18em',
              }}
            >
              Contato direto
            </p>
            <a
              href="mailto:projetoaroko@gmail.com"
              className="text-white/80 hover:text-[#d83a22] transition-colors underline underline-offset-4"
              style={{ fontSize: '13px' }}
            >
              projetoaroko@gmail.com
            </a>
          </div>
        </div>
        <div
          className="max-w-[1200px] mx-auto px-6 md:px-8 mt-7 pt-5"
          style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}
        >
          <p
            className="text-white/25 uppercase"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '9px',
              letterSpacing: '.16em',
            }}
          >
            © 2026 ÀROKÒ. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
