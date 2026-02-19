import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="relative min-h-screen bg-gradient-to-br from-blue-700 to-blue-900 dark:from-slate-950 dark:to-slate-950 text-white transition-colors duration-500 overflow-hidden flex flex-col justify-center items-center">
      
      <div className="max-w-5xl mx-auto px-6 w-full text-center relative z-10 py-20">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter"
        >
          <div className="min-h-[2.5em] md:min-h-[1.5em] flex items-center justify-center">
            <Typewriter
              options={{ autoStart: true, loop: true, delay: 60, deleteSpeed: 40, cursor: "|" }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Bienvenido a mi <span class="text-blue-300">portafolio</span>')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Mi nombre es <span class="text-blue-300">Richard Navarro</span>')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Analizo datos para crear...')
                  .pauseFor(1000)
                  .typeString('<br/><span class="text-blue-300">decisiones clave</span>')
                  .pauseFor(2500)
                  .start();
              }}
            />
          </div>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-blue-50/80 dark:text-slate-400 mb-10 max-w-2xl mx-auto font-medium"
        >
          Especialista en convertir flujos de datos complejos en estrategias accionables.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <a
            href="#project"
            className="bg-white text-blue-700 dark:bg-blue-600 dark:text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 active:scale-95 shadow-blue-900/20"
          >
            Conoce mi trabajo
          </a>
        </motion.div>
      </div>

      {/* --- OLA CORREGIDA --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px]">
          <path 
            d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32V160H0Z" 
            /* EXPLICACIÓN DE LA CORRECCIÓN:
               - fill-white: Se une con el fondo blanco de About en modo luz.
               - dark:fill-slate-900: Se une con el fondo Slate-900 de About en modo oscuro.
               Esto crea el contraste contra el fondo Slate-950 del Hero.
            */
            className="fill-white dark:fill-slate-900 transition-colors duration-500"
          />
        </svg>
      </div>
    </header>
  );
}