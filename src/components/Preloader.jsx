import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900"
    >
      {/* Logo o Icono Central */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        className="text-sky-400 text-6xl mb-8"
      >
        <i className="fa-solid fa-chart-line"></i>
      </motion.div>

      {/* Texto de Carga */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white tracking-[0.3em] font-light text-sm mb-4"
      >
        PROCESANDO DATOS
      </motion.div>

      {/* Barra de progreso animada */}
      <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-full h-full bg-sky-500"
        />
      </div>
    </motion.div>
  );
}