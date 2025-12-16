import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';

const Features: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="features" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-primary-900/10 to-transparent skew-x-12 translate-x-32 z-0 opacity-30"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-tertiary-400 font-bold tracking-widest text-sm uppercase block mb-4"
          >
            {content.features.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            {content.features.title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {content.features.items.map((feature, idx) => (
                <motion.div 
                    key={feature.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative flex flex-col md:flex-row gap-8 bg-white/5 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-[2rem] hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                >
                    {/* Hover Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="shrink-0 relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                            <feature.icon size={36} className="text-secondary-400 group-hover:text-white transition-colors" />
                        </div>
                        {/* Glow under icon */}
                        <div className="absolute inset-0 bg-secondary-500/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                {feature.title} <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                                    {feature.subtitle}
                                </span>
                            </h3>
                            <ArrowUpRight className="text-slate-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                        </div>
                        
                        <p className="text-slate-400 mb-6 text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                            {feature.description}
                        </p>
                        
                        <ul className="space-y-4">
                            {feature.details.map((detail, i) => (
                                <li key={i} className="flex gap-4 text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-secondary-500/10 text-secondary-400 flex items-center justify-center shrink-0 mt-0.5 border border-secondary-500/20">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;