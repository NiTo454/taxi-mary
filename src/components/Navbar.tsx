export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-pink-500/20 px-4 py-3">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {/* Logo / Nombre */}
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
            <circle cx="7" cy="17" r="2"/>
            <path d="M9 17h6"/>
            <circle cx="17" cy="17" r="2"/>
          </svg>
          <span className="text-pink-500 font-extrabold text-lg tracking-wider">TAXI MARY</span>
        </div>

        {/* Etiqueta de estado */}
        <span className="text-[10px] uppercase tracking-wider border border-pink-500/50 text-pink-200 px-3 py-1 rounded-full bg-pink-500/10 font-medium animate-pulse">
          Mejor Servicio
        </span>
      </div>
    </nav>
  );
}
