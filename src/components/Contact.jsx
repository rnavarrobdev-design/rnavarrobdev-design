

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    setUserName(formData.get('name'));

    emailjs.sendForm(
      'service_fabnwjy', 
      'template_mpuygmi', 
      form.current, 
      'w7LLOCRnJlmE4pTdP'
    )
      .then((result) => {
          setShowModal(true);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el mensaje.");
      });
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 relative text-slate-900 dark:text-white"
        >
          Contacto
          <span className="block w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></span>
        </motion.h2>


        <div className="bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl transition-colors">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2 ml-1">Nombre</label>
                <input 
                  type="text" 
                  name="name"  // Coincide con el código de EmailJS
                  required
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  placeholder="Juan Perez"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2 ml-1">Correo</label>
                <input 
                  type="email" 
                  name="email" // Coincide con el código de EmailJS
                  required
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  placeholder="user@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2 ml-1">Mensaje</label>
              <textarea 
                name="message" 
                rows="5" 
                required
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 transition-all placeholder:text-slate-400 resize-none"
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>
            
            <button type="submit" 
              className="w-full bg-blue-500 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-400 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 uppercase tracking-widest text-sm active:scale-95">
              Enviar Mensaje <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </form>
        </div>
      </div>

      {/* --- MODAL DE ÉXITO --- */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            {/* Overlay oscuro */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            
            {/* Contenido del Modal */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center border border-slate-200 dark:border-slate-800"
            >
              <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">¡Enviado con éxito!</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
          Gracias <span className="text-blue-600 dark:text-blue-400 font-bold">{userName}</span>, 
          me pondré en contacto contigo lo antes posible.
        </p>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-slate-900 dark:bg-sky-600 text-white font-bold py-3 rounded-xl hover:scale-105 transition-transform"
              >
                Cerrar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}