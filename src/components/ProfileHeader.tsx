import Image from 'next/image';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center w-full group">

      {/* Avatar interactivo con resplandor neón dinámico */}
      <div className="relative w-28 h-28 mb-6 mt-2 transition-transform duration-500 hover:scale-105">

        {/* Aura exterior vibrante (fucsia/violeta) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

        {/* Contenedor de la imagen con borde glassmorphism */}
        <div className="relative w-full h-full bg-[#121212] rounded-full p-[2px] flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,0.4)] z-10 animate-float">

          {/* Máscara circular para la imagen */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
            <Image
              src="/foto_perfil.jpeg"
              alt="Taxi Mary"
              fill
              priority
              sizes="(max-width: 768px) 112px, 128px"
              className="object-cover"
            />
          </div>

        </div>
      </div>

      {/* Título Principal con sombra */}
      <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3 drop-shadow-md transition-all">
        Taxi <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500">Mary</span>
      </h1>

      {/* Descripción refinada */}
      <p className="text-pink-100/80 text-sm max-w-[280px] leading-relaxed font-light">
        Viajes seguros, rápidos y de absoluta confianza. Tu comodidad es nuestra prioridad.
      </p>

    </div>
  );
}
