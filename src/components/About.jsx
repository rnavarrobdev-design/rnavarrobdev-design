import { motion } from 'framer-motion';
import userLogo from '../assets/user.svg';

export default function About() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500" id="about">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 relative text-slate-900 dark:text-white"
        >
          Sobre mí
          <span className="block w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LADO DE LA IMAGEN (Logo user.svg) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div 
              className="relative"
              /* Animación de flotación suave */
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                className="w-72 h-72 md:w-80 md:h-80 object-contain" 
                src={userLogo}
                alt="Richard NB Data Analyst" 
              />
              {/* Resplandor sutil detrás del logo para dar profundidad en modo oscuro */}
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl -z-10 rounded-full"></div>
            </motion.div>
          </motion.div>
          
          {/* LADO DEL TEXTO */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              Analista de Datos con alma de programador enfocado en la <strong className="text-blue-600 dark:text-blue-400 font-bold">automatización, arquitectura de información e inteligencia artificial</strong>. Especialista en transformar datos complejos en decisiones estratégicas mediante el uso de <strong className="text-blue-600 dark:text-blue-400 font-bold">Python, SQL y Power BI (DAX)</strong>.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              Mi experiencia como programador me permite dominar estructuras JSON/XML, flujos de datos y herramientas como Google Analytics.
            </p>
            
            <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 400 }}>
              <a 
                href="#skill" 
                className="inline-block border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 px-8 py-3 rounded-lg text-blue-600 dark:text-blue-400 font-bold transition-all"
              >
                Ver más habilidades
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}