import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { content } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div 
        animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-200/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
      <motion.div 
        animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-200/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-primary-600 font-bold tracking-widest text-sm uppercase">{content.contact.label}</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                {content.contact.titleStart} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">{content.contact.titleEnd}</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                {content.contact.description}
              </p>
            </div>

            <div className="space-y-8">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg shadow-primary-500/10 flex items-center justify-center text-primary-600 border border-slate-100 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-xl group-hover:text-primary-600 transition-colors">{content.contact.locationTitle}</h4>
                    <div className="text-slate-600 leading-relaxed group-hover:text-slate-500 transition-colors">
                        {CONTACT_INFO.addressLines.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>
                  </div>
                </motion.div>

                <div className="h-px bg-slate-200 w-full opacity-50"></div>

                <div className="grid sm:grid-cols-2 gap-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <Phone size={24} />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">{content.contact.phoneTitle}</h4>
                      <p className="text-slate-600 font-medium">{CONTACT_INFO.phone}</p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <Mail size={24} />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">{content.contact.emailTitle}</h4>
                      <p className="text-slate-600 font-medium">{CONTACT_INFO.email}</p>
                    </motion.div>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-primary-900/10 border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/30 to-transparent rounded-bl-[100%] z-0 pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10 flex items-center gap-3">
                <MessageSquare className="text-primary-600" /> {content.contact.formTitle}
            </h3>
            
            {success && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-8 p-4 bg-green-50 text-green-700 rounded-2xl flex items-center gap-3 border border-green-200"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                {content.contact.success}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative"
              >
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="peer w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 outline-none transition-all bg-slate-50/50 focus:bg-white placeholder-transparent focus:shadow-[0_0_20px_-5px_rgba(0,144,212,0.4)]"
                  placeholder="Nama Lengkap"
                />
                <label htmlFor="name" className="absolute left-5 -top-3 bg-white px-2 text-xs font-bold text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-3 peer-focus:text-xs peer-focus:font-bold peer-focus:text-primary-600">
                    {content.contact.form.name}
                </label>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative"
              >
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="peer w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 outline-none transition-all bg-slate-50/50 focus:bg-white placeholder-transparent focus:shadow-[0_0_20px_-5px_rgba(0,144,212,0.4)]"
                  placeholder="Email"
                />
                 <label htmlFor="email" className="absolute left-5 -top-3 bg-white px-2 text-xs font-bold text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-3 peer-focus:text-xs peer-focus:font-bold peer-focus:text-primary-600">
                    {content.contact.form.email}
                </label>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative"
              >
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="peer w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 outline-none transition-all bg-slate-50/50 focus:bg-white resize-none placeholder-transparent focus:shadow-[0_0_20px_-5px_rgba(0,144,212,0.4)]"
                  placeholder="Pesan..."
                />
                <label htmlFor="message" className="absolute left-5 -top-3 bg-white px-2 text-xs font-bold text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-3 peer-focus:text-xs peer-focus:font-bold peer-focus:text-primary-600">
                    {content.contact.form.message}
                </label>
              </motion.div>

              <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? content.contact.form.sending : (
                  <>
                    {content.contact.form.btn} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
