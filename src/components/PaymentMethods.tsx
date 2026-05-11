'use client';
import { useState } from 'react';

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
      <h2 className="text-xl font-bold mb-6 text-white drop-shadow-md self-start">Método de Pago</h2>

      {/* Contenedor estricto con forma de tarjeta física (Aspect Ratio 1.59:1) */}
      <div className="relative w-full max-w-[360px] aspect-[1.59/1] rounded-[20px] bg-gradient-to-br from-[#004481] via-[#043263] to-[#072146] shadow-[0_15px_35px_rgba(0,68,129,0.4)] p-5 sm:p-6 flex flex-col justify-between overflow-hidden group hover:-translate-y-2 transition-transform duration-500">

        {/* Efecto de luz / reflejo diagonal tipo cristal */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00abff] rounded-full blur-[60px] opacity-20 pointer-events-none"></div>

        {/* Fila Superior: Banco e Icono Contactless */}
        <div className="flex justify-between items-start relative z-10">
          <span className="text-xl font-black text-white tracking-widest drop-shadow-md">BBVA</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
            <path d="M8.5 4a23.6 23.6 0 0 1 0 16"/><path d="M13.5 6a18.6 18.6 0 0 1 0 12"/><path d="M18.5 8a13.6 13.6 0 0 1 0 8"/>
          </svg>
        </div>

        {/* Fila Central: Chip Metálico */}
        <div className="relative z-10">
          <div className="w-10 h-7 bg-gradient-to-br from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] rounded-md shadow-inner flex flex-col justify-between p-[3px] border border-[#8a6308]/80">
            <div className="w-full h-[1px] bg-[#8a6308]/60"></div>
            <div className="w-full flex justify-between">
              <div className="w-[1px] h-2.5 bg-[#8a6308]/60"></div>
              <div className="w-2.5 h-full border border-[#8a6308]/60 rounded-sm"></div>
              <div className="w-[1px] h-2.5 bg-[#8a6308]/60"></div>
            </div>
            <div className="w-full h-[1px] bg-[#8a6308]/60"></div>
          </div>
        </div>

        {/* Fila Inferior: CLABE y Datos (Diseñado para no amontonarse) */}
        <div className="relative z-10 flex flex-col gap-1.5 mt-2">
          {/* Número ajustado para caber siempre en 1 línea */}
          <p className="font-mono text-[16px] min-[375px]:text-[17px] sm:text-[19px] tracking-[0.1em] text-gray-100 drop-shadow-md font-semibold">
            012 180 0155 3816 6209
          </p>

          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[7px] min-[375px]:text-[8px] uppercase tracking-widest text-blue-200/70 mb-[2px]">Titular</span>
              <span className="text-[11px] min-[375px]:text-xs font-bold uppercase tracking-widest text-white drop-shadow-sm">
                Marisela Maldonado
              </span>
            </div>
            {/* Etiqueta CLABE en la esquina inferior derecha */}
            <span className="text-[8px] font-bold uppercase tracking-widest text-white/60 border border-white/20 px-1.5 py-0.5 rounded backdrop-blur-sm">
              CLABE
            </span>
          </div>
        </div>
      </div>

      {/* Botón de Copiar Externo (Integrado con el tema Rosa Neón) */}
      <button
        onClick={() => copiarDatos('012180015538166209', 'bbva')}
        className={`mt-6 w-full max-w-[360px] py-3.5 px-4 flex items-center justify-center gap-2 rounded-xl transition-all duration-300 text-sm font-semibold active:scale-95 shadow-lg ${
          copiado === 'bbva'
            ? 'bg-green-500/20 border border-green-500/50 text-green-300 shadow-green-500/20'
            : 'bg-pink-600/10 border border-pink-500/30 text-pink-100 hover:bg-pink-600/20 hover:border-pink-500/60 shadow-pink-500/10 hover:shadow-pink-500/20'
        }`}
      >
        {copiado === 'bbva' ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>¡CLABE Copiada al Portapapeles!</span>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Copiar Número de CLABE</span>
          </>
        )}
      </button>

      {/* Mensaje de error (oculto por defecto) */}
      {errorCopiar === 'bbva' && (
        <div className="mt-3 w-full max-w-[360px] bg-red-900/40 text-red-200 text-xs p-3 rounded-lg border border-red-500/30 text-center">
          No se pudo copiar. Selecciona el número en la tarjeta manualmente.
        </div>
      )}
    </div>
  );
}
