'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaPrint, FaArrowLeft } from 'react-icons/fa';
import { GiButterfly } from 'react-icons/gi';
import { MdVerified, MdAccountBalance } from 'react-icons/md';

interface TarjetaProps {
  onClose?: () => void;
}

export default function Tarjeta({ onClose }: TarjetaProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const numeroWhatsApp = "525613912371";
  const mensaje = "Hola Mary, me gustaría solicitar un viaje por favor.";

  const exportarDiseno = () => {
    window.print();
  };

  const ContenidoTarjeta = ({ lado }: { lado: 'front' | 'back' }) => (
    <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-pink-500/30 rounded-2xl overflow-hidden flex flex-col justify-between p-6 relative shadow-2xl">
      {/* Fondo sólido forzado para impresión */}
      <div className="absolute inset-0 bg-[#121212] -z-10 print:block hidden"></div>

      <GiButterfly className="absolute -top-4 -right-4 text-pink-500/10 text-7xl rotate-12" />
      <GiButterfly className="absolute -bottom-4 -left-4 text-fuchsia-500/10 text-7xl -rotate-12" />

      {lado === 'front' ? (
        <>
          <div className="flex items-center gap-4 relative z-10">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-br from-pink-500 to-fuchsia-600 flex-shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-pink-500/50 bg-black">
                <Image src="/foto_perfil.jpeg" alt="Taxi Mary" fill className="object-cover" />
              </div>
              <MdVerified className="absolute -bottom-1 -right-1 text-fuchsia-400 text-xl bg-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black text-white tracking-widest leading-none uppercase">
                TAXI <span className="text-pink-500">MARY</span>
              </h1>
              <p className="text-pink-200/70 text-[9px] font-bold uppercase tracking-[0.2em] mt-2 flex items-center gap-2">
                Transporte Seguro <GiButterfly className="text-pink-400" />
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-pink-500/30 my-3.5"></div>
          <div className="flex flex-col gap-3.5 relative z-10 w-full pl-2">
             <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-pink-400" size={12} />
                <span className="text-sm font-bold text-white tracking-[0.2em]">56 1391 2371</span>
             </div>
             <div className="flex items-center gap-3">
                <GiButterfly className="text-fuchsia-400" size={16} />
                <span className="text-sm font-bold text-pink-200 tracking-[0.15em]">Pide tu viaje</span>
             </div>
          </div>
        </>
      ) : (
        <div className="flex w-full items-center justify-between gap-4 relative z-10 h-full">
           <div className="relative w-[110px] h-[110px] rounded-xl overflow-hidden border-2 border-pink-500/40 bg-white p-2 flex-shrink-0">
              <Image src="/qr.jpeg" alt="QR Taxi Mary" fill className="object-contain" />
           </div>
           <div className="flex flex-col items-center flex-grow text-center">
              <h2 className="text-[10px] font-black text-pink-400 tracking-[0.2em] uppercase mb-1">Pago Directo</h2>
              <div className="w-full h-px bg-pink-500/20 my-2"></div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1 text-pink-200/50">
                  <MdAccountBalance size={12} />
                  <span className="text-[8px] uppercase tracking-widest">BBVA</span>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/20 px-2 py-1 rounded">
                  <span className="text-[12px] font-mono font-black text-white">012 180 0155 3816 6209</span>
                </div>
                <span className="text-[9px] font-bold text-pink-100/80 uppercase">Marisela Maldonado</span>
              </div>
           </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4">

      {/* VISTA DIGITAL (Se oculta al imprimir) */}
      <div className="print:hidden flex flex-col items-center w-full">
        <div
          className="w-full max-w-[380px] aspect-[1.6/1] relative cursor-pointer"
          style={{ perspective: '1000px' }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="relative w-full h-full transition-transform duration-700 ease-in-out" style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
            <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden' }}><ContenidoTarjeta lado="front" /></div>
            <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}><ContenidoTarjeta lado="back" /></div>
          </div>
        </div>
      </div>

      {/* VISTA DE IMPRESIÓN (Solo esto saldrá en el PDF) */}
      <div id="print-area" className="hidden print:flex flex-col gap-8 items-center justify-center w-full py-10 bg-white">
        <div className="w-[8.5cm] h-[5.5cm] shadow-none"><ContenidoTarjeta lado="front" /></div>
        <div className="w-[8.5cm] h-[5.5cm] shadow-none"><ContenidoTarjeta lado="back" /></div>
      </div>

      {/* BOTONES */}
      <div className="mt-12 flex flex-col items-center gap-4 print:hidden">
        <button onClick={exportarDiseno} className="px-8 py-3 rounded-full bg-pink-600 text-white font-bold flex items-center gap-2 hover:bg-pink-500 transition-colors shadow-lg">
          <FaPrint /> Exportar PDF Limpio
        </button>
        {onClose && (
          <button onClick={onClose} className="text-pink-200/40 text-xs flex items-center gap-2 hover:text-pink-200 transition-colors">
            <FaArrowLeft /> Volver
          </button>
        )}
      </div>

      {/* CSS MAGICO PARA EL PDF */}
      <style jsx global>{`
        @media print {
          /* Ocultamos TODO el sitio */
          body * {
            visibility: hidden;
          }
          /* Mostramos SOLO el area de impresion */
          #print-area, #print-area * {
            visibility: visible;
          }
          /* Lo posicionamos arriba del todo */
          #print-area {
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background: white !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            padding-top: 2cm !important;
          }
          @page {
            size: portrait;
            margin: 0;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
