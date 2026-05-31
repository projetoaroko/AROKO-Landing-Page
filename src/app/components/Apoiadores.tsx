export function Apoiadores() {
  const apoiadores = [
    { name: 'LOGO UNEB', src: '/LOGO UNEB.png', alt: 'Logo UNEB' },
    { name: 'LOGO RP', src: '/LOGO RP.png', alt: 'Logo RP' },
    {
      name: 'CA PRODUÇÕES ARTISTICAS',
      src: '/CA PRODUÇÕES ARTISTICAS - PRETA(2).png',
      alt: 'CA Produções Artísticas',
    },
  ];

  return (
    <section className="w-full bg-[#fbfaf7] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <p
          className="text-center text-[#77716A] uppercase mb-14"
          data-reveal="up"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '10px',
            letterSpacing: '.3em',
          }}
        >
          Marcas que caminham junto
        </p>

        <div className="mb-2">
          <p
            className="text-[#77716A] uppercase mb-3"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '9px',
              letterSpacing: '.22em',
            }}
          >
            Apoio Institucional
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apoiadores.map((apoiador) => (
              <div
                key={apoiador.name}
                className="brand-placeholder py-12 px-6 flex items-center justify-center"
                data-reveal="up"
              >
                <img
                  src={apoiador.src}
                  alt={apoiador.alt}
                  className="w-full max-w-full object-contain h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
