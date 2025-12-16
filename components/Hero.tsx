import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const { content } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>
         
         {/* Animated Blobs */}
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
         <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary-500/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-tertiary-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>
         
         {/* Grid & Noise */}
         <div className="absolute inset-0 bg-hero-pattern opacity-[0.03]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-colors cursor-default"
          >
            <Sparkles size={14} className="text-tertiary-400" />
            <span className="text-secondary-100 text-sm font-semibold tracking-wide uppercase">
              {content.hero.tagline}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8"
          >
            {content.hero.titleStart} <br />
            <span className="text-gradient">
              {content.hero.titleEnd}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {content.hero.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-full text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative">{content.hero.ctaPrimary}</span>
              <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#products" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white font-bold rounded-full text-lg border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 active:scale-95"
            >
              {content.hero.ctaSecondary}
            </a>
          </motion.div>

        </div>

        {/* Hero Visual Mockup */}
        <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, rotateX: 20, y: 100 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring" }}
            className="mt-20 md:mt-32 relative mx-auto max-w-6xl perspective-1000"
        >
            {/* Glow behind dashboard */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-secondary-500/20 blur-[60px] -z-10 rounded-full opacity-50"></div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl ring-1 ring-white/10">
                <div className="h-10 bg-slate-900/80 border-b border-white/5 flex items-center px-6 gap-2">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="mx-auto w-1/3 h-5 bg-white/5 rounded-full flex items-center justify-center text-[10px] text-white/30 font-mono">diginov.co.id</div>
                </div>
                <div className="relative group">
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                        alt="Dashboard Analytics" 
                        className="w-full h-auto opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
                style={{ y: y2 }}
                className="absolute -right-8 -top-12 md:-right-12 md:-top-20 bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl animate-float"
            >
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <Sparkles size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400">Status</div>
                        <div className="text-sm font-bold text-white">{content.hero.status}</div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;