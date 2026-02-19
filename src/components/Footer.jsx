import { useState } from 'react';

export default function Footer() {
  // 1. Definición del estado para el select
  const [version, setVersion] = useState("");

  // 2. Lógica para manejar el cambio de versión
  const handleVersionChange = (e) => {
    const url = e.target.value;
    if (url) {
      window.open(url, '_blank');
      setVersion(""); // Resetea el select tras abrir la página
    }
  };

  // 3. Tus versiones (puedes añadir las que quieras aquí)
  const versionesPortafolio = [
    { label: "Portafolio V.2.0", url: "https://richard-nb.github.io/Portafolio-V.2.0/" },
    { label: "Portafolio V.1.0", url: "https://richard-nb.github.io/Portafolio-V.1.0/" },
  ];

  return (
    <footer className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-slate-950 dark:to-slate-950 text-white transition-colors duration-500 relative border-t border-white/5">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Estructura Principal: 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          
          {/* Columna 1: Brand & Bio */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-300 tracking-tighter">
              Richard Navarro
            </h2>
            <p className="text-blue-100/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Analista de Datos especializado en automatización y arquitectura de información. Transformando flujos de datos en decisiones estratégicas.
            </p>
            <div className="flex justify-center md:justify-start gap-5 pt-2">
              <a href="#" className="text-blue-100/40 hover:text-white transition-all hover:-translate-y-1">
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-blue-100/40 hover:text-white transition-all hover:-translate-y-1">
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a href="#" className="text-blue-100/40 hover:text-white transition-all hover:-translate-y-1">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            Especialidades
            </h3>
            <nav className="flex flex-col space-y-2 text-sm text-blue-100/60 font-medium">
              <a href="#about" className="hover:text-blue-300 transition-colors w-fit mx-auto md:mx-0">Desarrollo de Dashboards</a>
              <a href="#skill" className="hover:text-blue-300 transition-colors w-fit mx-auto md:mx-0">Automatización de procesos</a>
              <a href="#project" className="hover:text-blue-300 transition-colors w-fit mx-auto md:mx-0">Modelado de Datos (DAX/SQL)</a>
              <a href="#contact" className="hover:text-blue-300 transition-colors w-fit mx-auto md:mx-0">Desarrollo web</a>
            </nav>
          </div>

          {/* Columna 3: Historial con Select */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="w-full max-w-[200px] text-center md:text-right">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 mb-4">
                Historial
              </h3>
              
              <div className="relative inline-block w-full">
                <select 
                  value={version}
                  onChange={handleVersionChange}
                  className="w-full appearance-none bg-white/5 border border-white/10 text-white text-xs px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <option value="" className="bg-slate-900 text-white">Versiones anteriores</option>
                  {versionesPortafolio.map((v, index) => (
                    <option key={index} value={v.url} className="bg-slate-900 text-white">
                      {v.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/40">
                  <i className="fa-solid fa-chevron-down text-[10px]"></i>
                </div>
              </div>
            </div>
            
            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Disponible para proyectos</span>
            </div>
          </div>

        </div>

        {/* Línea divisoria */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Pie de Página: Créditos */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-blue-100/40 uppercase tracking-[0.1em] font-bold gap-4 text-center">
          <p>© {new Date().getFullYear()} Richard Navarro. Todos los derechos reservados</p>
          <p className="flex items-center gap-1">
            Hecho con <span className="text-blue-300">React</span> & <span className="text-blue-300">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}