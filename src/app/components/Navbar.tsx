export function Navbar() {
  const navLinks = [
    { href: '#conceito', label: 'Conceito' },
    { href: '#mostra', label: 'ESTILISTAS' },
    {
      href: 'https://instagram.com/projetoaroko',
      label: 'Instagram',
      external: true,
    },
    { href: '#imprensa', label: 'Fale Conosco' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]"
      style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}
    >
      <div
        className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between"
        style={{ height: '52px' }}
      >
        <a
          href="#"
          className="logo-text epilogue-extrabold uppercase text-white"
          style={{ fontSize: '18px' }}
        >
          ÀROKÒ
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="https://shotgun.live/festivals/aroko-mostra-de-moda-afro-soteropolitana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] uppercase font-bold bg-white text-[#0f0f0f] px-5 py-2.5 hover:bg-[#d83a22] hover:text-white transition-all duration-300 animate-pulse-subtle relative overflow-hidden"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.14em',
          }}
        >
          INGRESSOS
        </a>
      </div>
    </nav>
  );
}
