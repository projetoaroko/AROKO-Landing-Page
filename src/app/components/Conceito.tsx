export function Conceito() {
  return (
    <section
      id="conceito"
      className="w-full bg-[#1B1B1B] text-white py-24 md:py-36"
    >
      <div className="max-w-[860px] mx-auto px-6 md:px-8 text-center">
        <p
          className="font-bold text-[#d83a22] mb-10 uppercase"
          data-reveal="up"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '10px',
            letterSpacing: '.26em',
          }}
        >
          Corpos que guiam a nossa narrativa.
        </p>

        <h2
          className="font-extrabold uppercase text-white"
          data-reveal="up"
          style={{
            fontSize: 'clamp(1.9rem,4.8vw,3.8rem)',
            lineHeight: 1.05,
            letterSpacing: '0',
          }}
        >
          Um gesto ancestral transformado em linguagem de moda.
        </h2>

        <div
          className="grid md:grid-cols-2 gap-8 md:gap-14 mt-14 text-left leading-7 text-[#C9C3BB]"
          style={{ fontSize: '14px' }}
        >
          <p data-reveal="left">
            Na tradição Yorùbá, ÀROKÒ é um sistema de comunicação não verbal onde
            objetos e arranjos transmitem mensagens, emoções e diretrizes. Nós
            trouxemos essa tecnologia ancestral para o agora. Na nossa passarela,
            o vestuário, os corpos e os movimentos assumem esse papel de
            comunicação. Eles funcionam como signos intencionais da nossa
            identidade, da nossa ancestralidade e do nosso território
            afro-soteropolitano.
          </p>
          <p data-reveal="right">
            A lógica do mercado tradicional historicamente tenta nos apagar. O
            ÀROKÒ rompe com essa objetificação histórica. Nós garantimos que os
            criadores negros locais sejam os protagonistas absolutos das suas
            próprias narrativas. Conectamos a herança afro-diaspórica de Salvador
            com o design contemporâneo para proteger e perpetuar a memória da
            Bahia.
          </p>
        </div>

        <p
          className="font-extrabold uppercase text-white mt-16"
          data-reveal="up"
          style={{
            fontSize: 'clamp(1rem,2vw,1.5rem)',
            letterSpacing: '.12em',
          }}
        >
          A nossa passarela se converte em um manifesto vivo.
        </p>
      </div>
    </section>
  );
}
