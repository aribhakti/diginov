import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="products" className="py-32 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-600 font-bold tracking-widest text-sm uppercase block mb-4"
          >
            {content.products.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {content.products.title}
          </motion.h2>
          <p className="text-slate-600 text-lg">
            {content.products.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {content.products.items.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-primary-200 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden cursor-default"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 mb-6 relative z-10 group-hover:shadow-lg group-hover:scale-110 group-hover:-rotate-3">
                    {product.icon && <product.icon size={32} strokeWidth={1.5} />}
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary-700 transition-colors relative z-10">
                    {product.title}
                </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;