import { motion } from 'framer-motion';
import excelIcon from '../assets/1-ms_excel.svg';
import powerBiIcon from '../assets/2-power_bi.svg';
import accessIcon from '../assets/3-ms_access.svg';
import pythonIcon from '../assets/4-python.svg';
import batchIcon from '../assets/5-batch_script.svg';
import sqlServerIcon from '../assets/6-sql_server.svg';
import googleAnalyticsIcon from '../assets/7-google_analytics.svg';
import jsonIcon from '../assets/8-json.svg';
import awsIcon from '../assets/10-aws_cloud.svg';
import gitIcon from '../assets/11-git.svg';
import linuxIcon from '../assets/12-linux.svg';
import webIcon from '../assets/16-web.svg';

export default function Skills() {
  const habilidades = [
    { nombre: "Microsoft Excel", img: excelIcon, descripcion: "Análisis avanzado, Power Pivot y modelado de datos complejos." },
    { nombre: "Power BI", img: powerBiIcon, descripcion: "Visualización de datos y creación de dashboards interactivos." },
    { nombre: "SQL / NoSQL", img: sqlServerIcon, descripcion: "Diseño y optimización de bases de datos para grandes volúmenes." },
    { nombre: "Python", img: pythonIcon, descripcion: "Análisis estadístico y limpieza de datos con Pandas y Numpy." },
    { nombre: "AWS Cloud", img: awsIcon, descripcion: "Almacenamiento y procesamiento de datos en la nube." },
    { nombre: "Google Analytics", img: googleAnalyticsIcon, descripcion: "Interpretación de métricas web para decisiones estratégicas." },
    { nombre: "Linux", img: linuxIcon, descripcion: "Administración de sistemas y manejo avanzado de terminal." },
    { nombre: "Batch Script", img: batchIcon, descripcion: "Automatización de procesos y flujos de trabajo en Windows." },
    { nombre: "Git / Github", img: gitIcon, descripcion: "Control de versiones y colaboración en proyectos de datos." },
    { nombre: "Microsoft Access", img: accessIcon, descripcion: "Gestión de bases de datos locales y formularios." },
    { nombre: "JSON / XML", img: jsonIcon, descripcion: "Manipulación de datos estructurados para integración de sistemas." },
    { nombre: "Desarrollo Web", img: webIcon, descripcion: "Interfaces personalizadas para visualización de datos web." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (

    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500" id="skill">
      {/* Se eliminó el gradiente superior que venía de About */}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16"
        >
          Habilidades
          <span className="block w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {habilidades.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-center shadow-sm"
            >
              <div className="mb-4 h-14 w-14 flex items-center justify-center">
                <img 
                  src={skill.img} 
                  alt={skill.nombre} 
                  className="h-12 w-12 object-contain transition-all duration-300"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.nombre}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-snug text-xs px-2">
                {skill.descripcion}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Se eliminó el gradiente inferior que iba hacia Projects */}

      <style>{`
        img {
          filter: brightness(0) saturate(100%) invert(25%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%);
        }
        .dark img {
          filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
        }
        .group:hover img {
          filter: brightness(0) saturate(100%) invert(40%) sepia(98%) saturate(1729%) hue-rotate(201deg) brightness(98%) contrast(101%) !important;
        }
      `}</style>
    </section>
  );
}