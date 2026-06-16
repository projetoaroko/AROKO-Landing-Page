export function Idealizadora() {
  return (
    <section className="w-full bg-[#f1eee8] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
        <div data-reveal="left">
          <h2
            className="font-extrabold uppercase text-[#1B1B1B] mb-10"
            style={{
              fontSize: 'clamp(1.8rem,3.5vw,3rem)',
              lineHeight: 1.04,
              letterSpacing: '0',
            }}
          >
            A idealizadora
            <br />
            por trás do gesto.
          </h2>
          <p className="leading-7 text-[#4c4742]" style={{ fontSize: '14px' }}>
            Maria Eduarda Gomes, prestes a concluir sua graduação em Relações
            Públicas pela Universidade do Estado da Bahia (UNEB), tem na moda a
            sua primeira e mais instintiva forma de expressão. Com forte atuação
            nas áreas de comunicação, design gráfico, marketing e produção de
            eventos em Salvador, o que começou como um fascínio de infância
            amadureceu ao longo de sua trajetória acadêmica.
          </p>
          <p
            className="leading-7 text-[#4c4742] mt-5"
            style={{ fontSize: '14px' }}
          >
            A mostra ÀROKÒ, idealizada como seu projeto de graduação, é a
            materialização de suas vivências como mulher afrodescendente em
            Salvador e da convicção de que a moda autoral local carece de uma
            vitrine própria. Através do evento, ela busca dar protagonismo aos
            criadores pretos da cidade, celebrando a forma como codificam e
            transmitem suas múltiplas vivências, demarcações territoriais e
            heranças ancestrais.
          </p>

          <div
            className="mt-10 pt-6"
            style={{ borderTop: '1px solid rgba(27,27,27,.15)' }}
          >
            <p
              className="font-bold uppercase text-[#1B1B1B]"
              style={{ fontSize: '14px' }}
            >
              Maria Eduarda Gomes
            </p>
            <p
              className="text-[#6f685f] mt-1.5 uppercase"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                letterSpacing: '.18em',
              }}
            >
              Idealizadora &amp; Produtora Cultural
            </p>
            <p
              className="text-[#6f685f] mt-5 uppercase"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '10px',
                letterSpacing: '.14em',
              }}
            >
              Projeto com o selo de Relações Públicas da UNEB
            </p>
          </div>
        </div>

        <div className="profile-placeholder" data-reveal="right">
          <img
            src="/Maria-Eduarda-Gomes-Silva-Salvador.jpeg"
            alt="Maria Eduarda Gomes Silva Salvador"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
