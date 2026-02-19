import { useState, useEffect } from "react";

export default function Navbar({ toggleTheme, theme }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueo de scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: "INICIO", href: "#" },
    { name: "SOBRE MÍ", href: "#about" },
    { name: "HABILIDADES", href: "#skill" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg h-20" 
            : "bg-transparent h-24 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center text-2xl font-black">
            <a href="#" className={`flex items-center gap-2 transition-colors duration-500 ${
              scrolled ? "text-blue-700 dark:text-blue-500" : "text-white"
            }`}>
              <span>&lt;</span>
              <span className="mx-0.5 tracking-tighter">RICHARD NB</span>
              <span>/&gt;</span>
            </a>
          </div>
          
          {/* Menú Desktop */}
          <div className={`hidden md:flex gap-10 items-center text-[14px] font-bold tracking-[0.2em] ${
            scrolled ? "text-slate-800 dark:text-white" : "text-white"
          }`}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-blue-400 dark:hover:text-blue-500 transition-colors uppercase">
                {link.name}
              </a>
            ))}
            
            {/* Interruptor Desktop */}
            <button 
              onClick={toggleTheme}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all border ${
                scrolled 
                  ? "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white" 
                  : "bg-white/10 border-white/20 hover:bg-white/20 text-white"
              }`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <a href="#contact" className="px-6 py-2.5 rounded-full font-black text-[14px] tracking-widest bg-blue-700 text-white hover:bg-blue-800 transition-colors shadow-md shadow-blue-700/20">
              CONTÁCTAME
            </a>
          </div>

          {/* Acciones Móviles (Se mantiene el interruptor aquí) */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all border ${
                scrolled 
                  ? "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white" 
                  : "bg-white/10 border-white/20 text-white"
              }`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button 
              onClick={() => setIsOpen(true)}
              className={`text-2xl transition-colors ${scrolled ? "text-blue-700 dark:text-blue-500" : "text-white"}`}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MENÚ MÓVIL FULL SCREEN --- */}
      <div className={`fixed inset-0 w-full h-full z-[70] transition-all duration-500 ease-in-out md:hidden ${
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } bg-white dark:bg-slate-950 text-slate-900 dark:text-white`}>
        
        {/* Botón Cerrar */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-8 right-6 text-4xl p-2 text-slate-400 hover:text-blue-600 transition-colors"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Contenido Centrado */}
        <div className="flex flex-col h-full items-center justify-center gap-12 text-center p-6">

          <div className="flex flex-col gap-8 text-[18px] font-black tracking-[0.25em] uppercase">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-blue-700 text-white px-12 py-5 rounded-full font-black tracking-widest shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
          >
            CONTÁCTAME
          </a>
        </div>
      </div>
    </>
  );
}