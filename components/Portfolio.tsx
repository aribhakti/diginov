import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio: React.FC = () => {
  const { content } = useLanguage();
  const images = [
    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
  ];

  // Duplicate for seamless loop
  const marqueeImages = [...images, ...images, ...images];

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div className="max-w-2xl">
                <span className="text-primary-600 font-bold tracking-widest text-sm uppercase block mb-3">{content.gallery.label}</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                    {content.gallery.title}
                </h2>
            </div>
            <p className="text-slate-500 max-w-md text-lg">
                {content.gallery.description}
            </p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
            className="flex gap-8 w-max"
            animate={{ x: [0, -1920] }}
            transition={{ 
                duration: 40,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            {marqueeImages.map((src, index) => (
                <div 
                    key={index} 
                    className="w-[400px] h-[250px] rounded-2xl overflow-hidden relative group shrink-0 cursor-pointer"
                >
                    <img 
                        src={`${src}&auto=format&fit=crop`}
                        alt="Product Gallery"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;