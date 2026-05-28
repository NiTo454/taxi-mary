'use client';
import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center w-full group">

      {/* Avatar interactivo con flotación */}
      <div className="relative w-36 h-36 mb-6 mt-2 transition-transform duration-500 group-hover:scale-105 animate-float">

        {/* Aura exterior vibrante que respira con el hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600 via-pink-600 to-purple-600 rounded-full blur-[25px] opacity-40 group-hover:opacity-80 group-hover:blur-[35px] transition-all duration-700 ease-out"></div>

        {/* Anillo de borde neón giratorio */}
        <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-violet-500 shadow-[0_0_25px_rgba(236,72,153,0.5)] z-10 animate-spin-slow group-hover:animate-spin-fast"></div>

        {/* Contenedor de la Imagen (Estático para que la foto no gire) */}
        <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#050505] z-20">

          {/* ✨ Efecto de destello de cristal (Shine) al pasar el cursor ✨ */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-30 pointer-events-none"></div>

          <Image
            src="/foto_perfil.jpeg"
            alt="Taxi Mary - Perfil"
            fill
            priority
            sizes="(max-width: 768px) 144px, 144px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Badge de Verificación con efecto de pulso (En línea) */}
        <div className="absolute bottom-1 right-1 z-40">
          <div className="relative">
            {/* Ping de fondo */}
            <div className="absolute inset-0 bg-fuchsia-500 rounded-full animate-ping opacity-60"></div>
            {/* Badge estático */}
            <div className="relative bg-[#0a0a0a] rounded-full p-1.5 border border-pink-500/60 shadow-[0_0_15px_rgba(236,72,153,0.6)] transition-transform duration-300 hover:scale-110 hover:rotate-12 bg-opacity-90 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,1)]">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Título Principal con gradiente en movimiento continuo */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
        Taxi <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-400 animate-text-gradient drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">Mary</span>
      </h1>

      {/* Badge de Estrellas (Estilo Píldora de Cristal) */}
      <div className="flex items-center gap-2 mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-pink-500/40 hover:bg-pink-500/10 hover:-translate-y-0.5">
        <span className="text-yellow-400 text-sm tracking-[0.15em] drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">★★★★★</span>
        <div className="w-[1px] h-3 bg-white/20 mx-1"></div>
        <span className="text-white text-sm font-bold tracking-wider drop-shadow-md">5.0</span>
      </div>

      {/* Descripción enmarcada en cristal sutil */}
      <div className="relative px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] shadow-inner max-w-[320px]">
        <p className="text-pink-50/80 text-sm leading-relaxed font-light drop-shadow-sm">
          Viajes seguros, rápidos y de absoluta confianza. <strong className="text-white font-medium">Tu comodidad es nuestra prioridad.</strong>
        </p>
      </div>

      {/* Estilos CSS integrados para animaciones personalizadas */}
      <style>{`
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 4s linear infinite; }
        .animate-spin-fast { animation: spin 1.5s linear infinite; }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: textGradient 4s linear infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes textGradient {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
      `}</style>
    </div>
  );
}
