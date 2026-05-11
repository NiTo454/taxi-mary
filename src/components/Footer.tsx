export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-8 mt-auto flex flex-col items-center justify-center">
      <p className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-2 font-medium">
        Cobertura en Tizayuca
      </p>

      <div className="flex items-center gap-2 text-pink-500/50 text-[10px] hover:text-pink-400 transition-colors duration-300">
        <span>&copy; {currentYear} Taxi Mary</span>
        <span>•</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  );
}
