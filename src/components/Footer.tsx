export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative mt-auto pt-10 pb-6 flex flex-col items-center justify-center">

      {/* Línea divisoria superior con gradiente difuminado */}
      <div className="absolute top-0 w-3/4 max-w-md h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>

      {/* Indicador de Ubicación */}
      <div className="flex items-center gap-1.5 mb-4 group cursor-default">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="text-pink-500/60 group-hover:text-pink-400 transition-colors duration-300"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <p className="text-pink-100/60 text-xs tracking-[0.2em] uppercase font-medium group-hover:text-pink-100/80 transition-colors duration-300">
          Cobertura en Tizayuca
        </p>
      </div>

      {/* Copyright y Firma */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-pink-500/40 text-[10px] hover:text-pink-500/80 transition-colors duration-500">
          <span>&copy; {currentYear} Taxi Mary</span>
          <span className="text-pink-500/20">•</span>
          <span>Todos los derechos reservados</span>
        </div>

        {/* Firma de creador ultra-discreta */}
        <span className="text-white/5 hover:text-pink-500/40 text-[8px] uppercase tracking-widest transition-all duration-700 cursor-default">
          Diseñado por Syntaxis Lab
        </span>
      </div>

    </footer>
  );
}
