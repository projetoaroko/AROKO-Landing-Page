import { useEffect, useState } from 'react';

export function TicketWidget() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Load the Shotgun widget script
    const script = document.createElement('script');
    script.src = 'https://shotgun.live/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed right-6 bottom-6 md:right-10 md:bottom-10 z-40 animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-[#D9D4CC]">
            {/* Header */}
            <div className="bg-[#1B1B1B] text-white px-4 py-3 flex items-center justify-between">
              <h3 className="font-bold text-sm uppercase" style={{ letterSpacing: '.08em' }}>
                Ingressos
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#d83a22] transition-colors"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            {/* Widget Container */}
            <div className="w-80 h-96 overflow-hidden">
              <iframe
                src="https://shotgun.live/events/aroko-mostra-de-moda-afro-soteropolitana?embedded=1&ui=dark&transparentBackground=1"
                allow="payment"
                style={{
                  width: '100%',
                  height: '100%',
                  border: '0',
                  colorScheme: 'none',
                }}
                title="ÀROKÒ - Tickets"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
