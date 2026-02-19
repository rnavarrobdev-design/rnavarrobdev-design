import { motion } from 'framer-motion';

export default function Projects() {
  const misProyectos = [
    {
      titulo: "Análisis de Datos de Ventas",
      descripcion: "Optimización de inventarios mediante modelos predictivos en Python y visualización en Power BI, mejorando la toma de decisiones estratégicas.",
      imagen: "/img/code2.jpg", 
      tecnologias: ["Python", "SQL", "Power BI"],
      link: "#"
    },
    {
      titulo: "Dashboard Financiero Automático",
      descripcion: "Automatización de reportes financieros integrando flujos de datos desde diversas APIs y Google Analytics para métricas en tiempo real.",
      imagen: "/img/code2.jpg",
      tecnologias: ["React", "Tailwind", "Vite"],
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (

    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500" id="project">
      {/* Se eliminó el gradiente superior que venía de Skills */}
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16"
        >
          Proyectos
          <span className="block w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {misProyectos.map((proyecto, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500 transition-all group shadow-sm"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={proyecto.imagen} 
                  alt={proyecto.titulo} 
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                {/* Se eliminó el overlay azulado difuminado */}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {proyecto.titulo}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm">
                  {proyecto.descripcion}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {proyecto.tecnologias.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-blue-300 text-[11px] uppercase tracking-wider px-3 py-1 rounded-md border border-slate-200 dark:border-slate-600 font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={proyecto.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline transition-all group/link"
                >
                  Ir al proyecto 
                  <i className="fa-solid fa-arrow-right transition-transform group-hover/link:translate-x-1"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}