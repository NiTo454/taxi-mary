'use client';
import { useState } from 'react';

export default function PaymentMethods() {
  // Le indicamos a TypeScript que el estado es un string
  const [copiado, setCopiado] = useState<string>('');
  const [errorCopiar, setErrorCopiar] = useState<string>('');

  // Tipamos los parámetros: texto y referencia serán strings
  const copiarDatos = async (texto: string, referencia: string): Promise<void> => {
    let exito = false;

    try {
      // Intento 1: API moderna (requiere HTTPS)
      if (navigator?.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(texto);
        exito = true;
      } else {
        // Intento 2: Fallback súper robusto (especial para iOS / HTTP local)
        const textArea = document.createElement("textarea");
        textArea.value = texto;

        // Evitar que el teclado virtual se abra en móviles
        textArea.setAttribute("readonly", "readonly");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";

        document.body.appendChild(textArea);

        // Hack necesario para seleccionar y copiar texto en iOS Safari
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
      setTimeout(() => setCopiado(''), 3000); // El éxito dura 3 segundos
    } else {
      setErrorCopiar(referencia);
      setCopiado('');
      setTimeout(() => setErrorCopiar(''), 5000); // El error dura 5 segundos
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4 text-left text-white">Métodos de Pago</h2>

      {/* Tarjeta BBVA */}
      <div className="bg-gradient-to-r from-[#004481] to-[#072146] p-5 rounded-xl mb-4 relative hover:scale-[1.02] transition-transform duration-300 shadow-md flex flex-col gap-3">
        <div>
          <p className="text-xs text-blue-200 font-bold mb-1">BANCOMER BBVA</p>
          <p className="text-sm text-white font-medium">Marisela Maldonado</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[16px] sm:text-lg tracking-widest text-white">012 180 0155 3816 6209</p>
            <p className="text-xs text-gray-300 mt-1">CLABE Interbancaria</p>
          </div>

          <button
            onClick={() => copiarDatos('012180015538166209', 'bbva')}
            className="w-full sm:w-auto bg-white/20 hover:bg-white/30 active:scale-95 text-white py-2 px-4 flex items-center justify-center gap-2 rounded-lg transition-all text-sm font-medium"
          >
            {copiado === 'bbva' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>¡Copiado!</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <span>Copiar CLABE</span>
              </>
            )}
          </button>
        </div>

        {/* Leyenda en caso de error por permisos del navegador móvil */}
        {errorCopiar === 'bbva' && (
          <div className="bg-red-500/20 text-red-200 text-xs p-3 rounded-md border border-red-500/30 leading-relaxed mt-1">
            No se pudo copiar automáticamente. Por favor, selecciona el número y cópialo manualmente.
          </div>
        )}
      </div>
    </div>
  );
}
