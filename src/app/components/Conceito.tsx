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
            Na tradição Yorùbá, ÀROKÒ é um sistema de comunicação não verbal em que objetos e arranjos transmitem mensagens, emoções e diretrizes. Trouxemos essa tecnologia ancestral para o presente. Na nossa passarela, o vestuário, os corpos e os movimentos assumem esse papel de comunicação, funcionando como signos intencionais de identidade, ancestralidade, pertencimento e território.
          </p>
          <p data-reveal="right">
            O ÀROKÒ nasce em Salvador e parte da potência criativa produzida na Bahia. A mostra coloca criadores baianos no centro de suas próprias narrativas, valorizando repertórios, vivências e referências construídas a partir deste território.
          </p>
        </div>

        <p
          className="text-left leading-7 text-[#C9C3BB] mt-8"
          data-reveal="up"
          style={{ fontSize: '14px' }}
        >
          Mais do que apresentar coleções, buscamos evidenciar uma moda que carrega os códigos culturais da Bahia e traduz, por meio do design contemporâneo, diferentes formas de viver, criar e pertencer a Salvador. Assim, o ÀROKÒ fortalece a produção autoral local e contribui para preservar, transformar e projetar as narrativas que fazem parte da memória e da identidade baiana.
        </p>
      </div>
    </section>
  );
}
