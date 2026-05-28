'use client';
import { useState, useEffect } from 'react';
import Navbar from '../src/components/Navbar';
import ProfileHeader from '../src/components/ProfileHeader';
import SplashScreen from '../src/components/SplashScreen';
import WhatsAppButton from '../src/components/WhatsAppButton';
import CallButton from '../src/components/CallButton';
import PaymentMethods from '../src/components/PaymentMethods';
import Footer from '../src/components/Footer';
import Tarjeta from './tarjeta';

export default function Home() {
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 1. Tiempo mínimo para que la animación se aprecie bien (1.5 segundos)
    const minTimePromise = new Promise(resolve => setTimeout(resolve, 1500));

    // 2. Promesa vinculada al evento de carga real de la ventana (imágenes, scripts, etc.)
    let handleLoad: () => void;
    const loadPromise = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve(true);
      } else {
        handleLoad = () => resolve(true);
        window.addEventListener('load', handleLoad);
      }
    });

    // 3. Esperamos a que se cumplan AMBAS: la carga real y el tiempo mínimo
    Promise.all([minTimePromise, loadPromise]).then(() => {
      setIsFadingOut(true); // Comienza la transición CSS (fade-out)
      setTimeout(() => {
        setIsLoading(false); // Quitamos la pantalla de carga del DOM
      }, 500); // 500ms coinciden con el duration-500 de Tailwind
    });

    return () => {
      if (handleLoad) window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {/* Pantalla de carga superpuesta (Overlay real) */}
      {isLoading && (
        <SplashScreen isFadingOut={isFadingOut} />
      )}

      {/* Contenido principal de la página.
          Evitamos el scroll ('h-screen overflow-hidden') mientras la capa de carga está activa */}
      <main className={`min-h-screen bg-black text-white selection:bg-pink-500/30 selection:text-pink-200 flex flex-col ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
      <Navbar
        onShowTarjeta={() => setMostrarTarjeta(true)}
        onHome={() => setMostrarTarjeta(false)}
      />

      {/* Contenedor centralizado para la tarjeta */}
      <div className="flex-grow flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

        {/* Brillo de fondo centralizado (se muestra cuando está la tarjeta) */}
        {mostrarTarjeta && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        )}

        {!mostrarTarjeta ? (
          <div className="w-full max-w-md relative animate-slide-up">
            {/* Aura / Resplandor de fondo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-fuchsia-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            {/* Tarjeta Principal (Glassmorphism) */}
            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-pink-500/20 rounded-[2rem] p-8 shadow-2xl flex flex-col items-center">

              <ProfileHeader />

              <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent my-8"></div>

              <div className="flex flex-col gap-4 w-full">
                <WhatsAppButton />
                <CallButton />
              </div>

              <div className="mt-10 w-full">
                <PaymentMethods />
              </div>

            </div>
          </div>
        ) : (
          <div className="w-full max-w-sm relative animate-slide-up z-10">
            {/* La tarjeta ahora maneja su propio botón llamando a setMostrarTarjeta(false) */}
            <Tarjeta onClose={() => setMostrarTarjeta(false)} />
          </div>
        )}
      </div>

      <Footer />
    </main>
    </>
  );
}
