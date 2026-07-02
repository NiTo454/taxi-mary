'use client';
import { useState } from 'react';
import { TAXI_INFO } from '../config/info';

export default function PaymentMethods() {
  const [copiado, setCopiado] = useState<string>('');
  const [errorCopiar, setErrorCopiar] = useState<string>('');

  const copiarDatos = async (texto: string, referencia: string): Promise<void> => {
    let exito = false;

    try {
      if (navigator?.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(texto);
        exito = true;
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = texto;
        textArea.setAttribute("readonly", "readonly");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";

        document.body.appendChild(textArea);
        textArea.select();
        textArea.setSelectionRange(0, 999999);

        exito = document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error("Error al intentar copiar:", err);
      exito = false;
    }

    if (exito) {
      setCopiado(referencia);
      setErrorCopiar('');
      setTimeout(() => setCopiado(''), 3000);
    } else {
      setErrorCopiar(referencia);
      setCopiado('');
      setTimeout(() => setErrorCopiar(''), 5000);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-xl font-bold mb-6 text-white tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] self-start">
        Método de Pago
      </h2>

      {/* Contenedor de la Tarjeta (Glassmorphism + Neon Glow on Hover) */}
      <div className="relative w-full max-w-[360px] aspect-[1.59/1] rounded-[20px] bg-gradient-to-br from-[#004481]/90 via-[#043263]/95 to-[#051429] p-5 sm:p-6 flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(236,72,153,0.25)] border border-white/10 backdrop-blur-xl">

        {/* Efecto de reflejo holográfico animado */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none transform -skew-x-12 w-[150%] -ml-[50%]"></div>

        {/* Luces de fondo internas (Fucsia/Violeta integrados con el azul) */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

        {/* Fila Superior: Banco e Icono Contactless */}
        <div className="flex justify-between items-start relative z-10">
          <span className="text-2xl font-black text-white tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">BBVA</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 drop-shadow-md">
            <path d="M8.5 4a23.6 23.6 0 0 1 0 16"/><path d="M13.5 6a18.6 18.6 0 0 1 0 12"/><path d="M18.5 8a13.6 13.6 0 0 1 0 8"/>
          </svg>
        </div>

        {/* Fila Central: Chip Metálico Mejorado */}
        <div className="relative z-10 mt-2">
          <div className="w-11 h-8 bg-gradient-to-br from-[#ebd197] via-[#b48835] to-[#f4e0a6] rounded-md shadow-[0_2px_5px_rgba(0,0,0,0.4)] flex flex-col justify-between p-[4px] border border-[#7a5912]">
            <div className="w-full h-[1px] bg-black/30 shadow-sm"></div>
            <div className="w-full flex justify-between">
              <div className="w-[1px] h-3 bg-black/30"></div>
              <div className="w-3 h-full border border-black/20 rounded-sm"></div>
              <div className="w-[1px] h-3 bg-black/30"></div>
            </div>
            <div className="w-full h-[1px] bg-black/30 shadow-sm"></div>
          </div>
        </div>

        {/* Fila Inferior: CLABE y Datos */}
        <div className="relative z-10 flex flex-col gap-2 mt-auto">
          {/* Número con resplandor sutil */}
          <p className="font-mono text-[17px] min-[375px]:text-[18px] sm:text-[20px] tracking-[0.12em] text-gray-50 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            {TAXI_INFO.bank.clabe}
          </p>

          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-blue-200/80 mb-0.5">Titular</span>
              <span className="text-xs font-bold uppercase tracking-widest text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {TAXI_INFO.driverName}
              </span>
            </div>
            {/* Etiqueta CLABE minimalista */}
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/80 border border-white/30 bg-white/5 px-2 py-1 rounded backdrop-blur-md">
              CLABE
            </span>
          </div>
        </div>
      </div>

      {/* Botón de Copiar Externo */}
      <button
        onClick={() => copiarDatos(TAXI_INFO.bank.clabeRaw, 'bbva')}
        aria-live="polite"
        className={`mt-8 w-full max-w-[360px] py-3.5 px-4 flex items-center justify-center gap-3 rounded-xl transition-all duration-300 text-sm font-semibold active:scale-95 shadow-lg backdrop-blur-sm ${
          copiado === 'bbva'
            ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
            : 'bg-fuchsia-600/15 border border-fuchsia-500/40 text-fuchsia-100 hover:bg-fuchsia-600/25 hover:border-fuchsia-500/70 shadow-[0_0_15px_rgba(217,70,239,0.15)] hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]'
        }`}
      >
        {copiado === 'bbva' ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>¡Copiado al Portapapeles!</span>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copiar Número de CLABE</span>
          </>
        )}
      </button>

      {/* Mensaje de error con estilo integrado */}
      {errorCopiar === 'bbva' && (
        <div className="mt-4 w-full max-w-[360px] bg-red-900/30 text-red-300 text-xs py-3 px-4 rounded-xl border border-red-500/40 text-center backdrop-blur-md animate-pulse">
          No se pudo copiar automáticamente. Por favor, selecciona el número de arriba.
        </div>
      )}
    </div>
  );
}
