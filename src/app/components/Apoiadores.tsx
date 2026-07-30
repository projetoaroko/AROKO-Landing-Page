export function Apoiadores() {
  const producao = [
    {
      name: 'CA PRODUÇÕES ARTISTICAS',
      src: '/CA PRODUÇÕES ARTISTICAS - PRETA(2).png',
      alt: 'CA Produções Artísticas',
    },
  ];

  // Coloquei as três logos que devem ficar na mesma linha primeiro e na ordem desejada
  const apoioInstitucional = [
    { name: 'ESPAÇO-CULTURAL-DA-BARROQUINHA', src: '/ESPAÇO-CULTURAL-DA-BARROQUINHA.png', alt: 'Espaço Cultural da Barroquinha' },
    { name: 'FUNDACAO-GREGORIO-DE-MATTOS', src: '/FUNDACAO-GREGORIO-DE-MATTOS.png', alt: 'Fundação Gregório de Mattos' },
    { name: 'SECTUR-PREF', src: '/SECTUR-PREF.png', alt: 'SECTUR Prefeitura' },
    { name: 'LOGO RP', src: '/LOGO RP.png', alt: 'RP UNEB' },
    { name: 'LOGO UNEB', src: '/LOGO UNEB.png', alt: 'UNEB' },
  ];

  const parceiros = [
    { name: 'VRY', src: '/VRY LOGO.png', alt: 'Vry Company' },
    { name: 'TAVARES SILK', src: '/TAVARES-SILK.png', alt: 'Tavares Silk' },
    { name: 'DON-CREAM', src: '/DON-CREAM.png', alt: 'Don Cream' },
    { name: 'INSTITUTO-EMBELEZZE', src: '/INSTITUTO-EMBELEZZE.webp', alt: 'Instituto Embellezze' },
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

        {/* Produção */}
        <div className="mb-6" data-reveal="up">
          <p
            className="text-[#77716A] uppercase mb-3 text-center"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '9px',
              letterSpacing: '.22em',
            }}
          >
            Produção
          </p>

          <div className="flex items-center justify-center">
            {producao.map((item) => (
              <div
                key={item.name}
                className="brand-placeholder py-6 px-6 flex items-center justify-center max-w-[300px]"
              >
                <img src={item.src} alt={item.alt} className="w-full object-contain h-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Apoio Institucional */}
        <div className="mb-6" data-reveal="up">
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
            {apoioInstitucional.map((item) => (
              <div
                key={item.name}
                className="brand-placeholder py-8 px-6 flex items-center justify-center"
              >
                <img src={item.src} alt={item.alt} className="w-full max-w-[220px] object-contain h-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Parceiros */}
        <div className="mb-2" data-reveal="up">
          <p
            className="text-[#77716A] uppercase mb-3"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '9px',
              letterSpacing: '.22em',
            }}
          >
            Parceiros
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parceiros.map((item) => (
              <div
                key={item.name}
                className="brand-placeholder py-8 px-6 flex items-center justify-center"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={item.name === 'INSTITUTO-EMBELEZZE' ? 'max-h-[60px] object-contain' : 'w-full max-w-[220px] object-contain h-auto'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
