import { DesignerCard } from './DesignerCard';

export function Desfile() {
  const designers = [
    {
      name: 'Estilista A',
      image: '/aroko-passarela-modelos-costas-abraco.jpg',
    },
    {
      name: 'Estilista B',
      image: '/aroko-croquis-ilustracao-colecao.jpg',
    },
    {
      name: 'Estilista C',
      image: '/aroko-passarela-detalhe-terno-branco.jpg',
    },
  ];

  return (
    <section id="mostra" className="w-full bg-[#fbfaf7] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2
          className="font-black uppercase text-[#1B1B1B] mb-4"
          data-reveal="up"
          style={{
            fontSize: 'clamp(3.5rem,9vw,8rem)',
            letterSpacing: '0',
            lineHeight: 0.88,
          }}
        >
          Nosso desfile
        </h2>
        <p
          className="text-[#5f5951] mb-14"
          data-reveal="up"
          style={{ fontSize: '16px' }}
        >
          O desfile integra moda, dança afro-contemporânea e performance
          narrativa.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {designers.map((designer, idx) => (
            <div
              key={designer.name}
              className={idx === 1 ? 'md:mt-16' : ''}
            >
              <DesignerCard
                name={designer.name}
                image={designer.image}
                delay={idx * 0.1}
              />
            </div>
          ))}
        </div>

        {/* CTA line */}
        <div
          className="mt-14 pt-6 flex items-center justify-between flex-wrap gap-4"
          data-reveal="up"
          style={{ borderTop: '1px solid #D9D4CC' }}
        >
          <p
            className="text-[#77716A] uppercase"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '10px',
              letterSpacing: '.18em',
            }}
          >
            Cadastre-se para ser o primeiro a saber
          </p>
          <a
            href="#formulario"
            className="font-bold uppercase text-[#1B1B1B] hover:text-[#d83a22] transition-colors"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '11px',
              letterSpacing: '.15em',
            }}
          >
            Quero ser avisado &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
