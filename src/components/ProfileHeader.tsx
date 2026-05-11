import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center w-full group">

      {/* Avatar interactivo: Movimos el animate-float aquí para que TODO flote junto */}
      <div className="relative w-32 h-32 mb-6 mt-2 transition-transform duration-500 group-hover:scale-105 animate-float">

        {/* Aura exterior vibrante */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 via-purple-600 to-rose-500 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

        {/* Anillo de borde neón */}
        <div className="relative w-full h-full bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-rose-400 rounded-full p-[3px] shadow-[0_0_25px_rgba(236,72,153,0.4)] z-10">

          {/* Máscara circular para la imagen */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">

            {/* ✨ NUEVO: Efecto de destello de cristal (Shine) al pasar el cursor ✨ */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-20 pointer-events-none"></div>

            <Image
              src="/foto_perfil.jpeg"
              alt="Taxi Mary"
              fill
              priority
              sizes="(max-width: 768px) 128px, 128px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Badge de Verificación */}
          <div className="absolute bottom-0 right-0 bg-[#0a0a0a] rounded-full p-1 border border-pink-500/50 shadow-lg z-30 transition-transform duration-300 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.8)]">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          </div>

        </div>
      </div>

      {/* Título Principal con gradiente animado */}
      <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3 drop-shadow-md transition-all">
        Taxi <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-[length:200%_auto] hover:bg-[right_center] transition-all duration-500">Mary</span>
      </h1>

      {/* Badge de Estrellas (Estilo Píldora de Cristal) */}
      <div className="flex items-center gap-1.5 mb-5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-[0_4px_15px_rgba(236,72,153,0.1)] transition-colors hover:border-pink-400/50 hover:bg-pink-500/20">
        <span className="text-yellow-400 text-sm tracking-widest drop-shadow-[0_0_5px_rgba(250,204,21,0.6)]">★★★★★</span>
        <span className="text-pink-50 text-xs font-bold ml-1 drop-shadow-sm">5.0</span>
      </div>

      {/* Descripción refinada */}
      <p className="text-pink-100/80 text-sm max-w-[290px] leading-relaxed font-light drop-shadow-sm">
        Viajes seguros, rápidos y de absoluta confianza. Tu comodidad es nuestra prioridad.
      </p>

    </div>
  );
}
