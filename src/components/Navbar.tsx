import Link from 'next/link';

interface NavbarProps {
  onShowTarjeta?: () => void;
  onHome?: () => void;
}

export default function Navbar({ onShowTarjeta, onHome }: NavbarProps) {
  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0a0a0a]/75 backdrop-blur-lg border-b border-pink-500/20 px-4 py-3 shadow-[0_4px_30px_rgba(236,72,153,0.05)] transition-all">
      <div className="max-w-md mx-auto flex justify-between items-center">

        {/* Logo / Nombre - Ahora interactivo */}
        <Link href="/" onClick={onHome} className="flex items-center gap-2 group cursor-pointer">
          {/* Contenedor del SVG con resplandor en hover */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-pink-500 relative z-10 transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
              <circle cx="7" cy="17" r="2"/>
              <path d="M9 17h6"/>
              <circle cx="17" cy="17" r="2"/>
            </svg>
          </div>

          {/* Título con gradiente coherente */}
          <span className="font-extrabold text-lg tracking-wider text-white transition-colors">
            TAXI <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-600">MARY</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Botón de Tarjeta Digital */}
          <button onClick={onShowTarjeta} className="flex items-center justify-center p-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 hover:bg-pink-500/20 hover:scale-105 transition-all shadow-[0_0_10px_rgba(236,72,153,0.1)]" title="Ver Tarjeta de Contacto">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <line x1="7" y1="15" x2="7.01" y2="15"></line>
              <line x1="11" y1="15" x2="15" y2="15"></line>
            </svg>
          </button>

          {/* Etiqueta de estado premium con indicador "en línea" */}
          <div className="hidden sm:flex items-center gap-2 border border-pink-500/40 px-3 py-1.5 rounded-full bg-pink-900/20 shadow-[0_0_10px_rgba(236,72,153,0.1)] hover:bg-pink-900/30 transition-colors cursor-default">
            {/* Punto parpadeante (Ping) */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            {/* Texto de la etiqueta */}
            <span className="text-[10px] uppercase tracking-wider text-pink-100 font-semibold">
              Mejor Servicio
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
}
