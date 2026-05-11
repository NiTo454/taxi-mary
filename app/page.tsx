import Navbar from '../src/components/Navbar';
import ProfileHeader from '../src/components/ProfileHeader';
import WhatsAppButton from '../src/components/WhatsAppButton';
import CallButton from '../src/components/CallButton';
import PaymentMethods from '../src/components/PaymentMethods';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-pink-500/30 selection:text-pink-200 flex flex-col">
      <Navbar />

      {/* Contenedor centralizado para la tarjeta */}
      <div className="flex-grow flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">

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
      </div>

      <Footer />
    </main>
  );
}
