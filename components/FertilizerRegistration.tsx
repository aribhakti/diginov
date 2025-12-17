import React from 'react';
import { motion } from 'framer-motion';
import { REGISTRATION_REQUIREMENTS, TOOLTIP_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Info } from 'lucide-react';

const FertilizerRegistration: React.FC = () => {
  const { language } = useLanguage();
  const isId = language === 'id';

  return (
    <section id="registration" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-bold tracking-widest text-sm uppercase block mb-4"
          >
            {isId ? "Layanan Pendaftaran" : "Registration Services"}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {isId ? "Pendaftaran Pupuk & Pestisida" : "Fertilizer & Pesticide Registration"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg"
          >
            {isId 
              ? "Kami membantu mempermudah proses registrasi produk pertanian Anda ke kementerian terkait."
              : "We help simplify the registration process for your agricultural products to relevant ministries."}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Admin Checklist */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-primary-500 pl-4">
              {isId ? "Persyaratan Administrasi" : "Administrative Requirements"}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {REGISTRATION_REQUIREMENTS.admin.map((req) => (
                <div 
                  key={req.id}
                  className="group relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                      <req.icon size={20} />
                    </div>
                    <div className="relative group/tooltip">
                      <Info size={16} className="text-slate-400 cursor-help hover:text-primary-500 transition-colors" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity z-50">
                        {TOOLTIP_DATA.admin[req.label as keyof typeof TOOLTIP_DATA.admin] || "Dokumen wajib"}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900"></div>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-800">{req.label}</h4>
                </div>
              ))}
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1000&auto=format&fit=crop" 
                alt="Fertilizer Factory" 
                loading="lazy"
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Technical Checklist */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-secondary-500 pl-4">
              {isId ? "Persyaratan Teknis" : "Technical Requirements"}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {REGISTRATION_REQUIREMENTS.technical.map((req) => (
                <div 
                  key={req.id}
                  className="group relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-secondary-200 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center">
                      <req.icon size={20} />
                    </div>
                    <div className="relative group/tooltip">
                      <Info size={16} className="text-slate-400 cursor-help hover:text-secondary-500 transition-colors" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity z-50">
                        {TOOLTIP_DATA.technical[req.label as keyof typeof TOOLTIP_DATA.technical] || "Data teknis produk"}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900"></div>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-800">{req.label}</h4>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=1000&auto=format&fit=crop" 
                alt="Agricultural Lab" 
                loading="lazy"
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FertilizerRegistration;
