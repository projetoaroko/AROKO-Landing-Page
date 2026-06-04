import { useEffect } from 'react';

export function TicketWidget() {
  useEffect(() => {
    // Load the Shotgun widget script
    const script = document.createElement('script');
    script.src = 'https://shotgun.live/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="ingressos" className="w-full bg-[#fbfaf7] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2
          className="font-black uppercase text-[#1B1B1B] mb-4"
          data-reveal="up"
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            letterSpacing: '0',
            lineHeight: 0.88,
          }}
        >
          Ingressos
        </h2>
        <p
          className="text-[#5f5951] mb-14"
          data-reveal="up"
          style={{ fontSize: '16px' }}
        >
          Garanta seu lugar na passarela. Compre seus ingressos agora.
        </p>

        <div className="flex justify-center" data-reveal="up">
          <iframe
            src="https://shotgun.live/events/aroko-mostra-de-moda-afro-soteropolitana?embedded=1&ui=dark&transparentBackground=1"
            allow="payment"
            style={{
              width: '100%',
              height: '800px',
              maxHeight: 'calc(100vh - 200px)',
              border: '0',
              colorScheme: 'none',
            }}
            title="ÀROKÒ - Tickets"
          />
        </div>
      </div>
    </section>
  );
}
