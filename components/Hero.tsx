import React, { useMemo, useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const { content } = useLanguage();
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = useMemo(() => 
    [...Array(40)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      color: i % 2 === 0 ? '#0090d4' : '#00c2b2' // Primary or Secondary
    })), []);

  const titleWords = content.hero.titleStart.split(' ');

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center bg-slate-950">
      {/* Wave/Ripple Distortion Overlay */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        animate={{ 
          x: mousePos.x * 0.5, 
          y: mousePos.y * 0.5 
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      >
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="hero-ripple">
              <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="transparent" filter="url(#hero-ripple)" />
        </svg>
      </motion.div>

      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>
         
         <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]"
         ></motion.div>
         <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[120px]"
         ></motion.div>
         
         {/* Particle Background */}
         <div className="absolute inset-0 overflow-hidden">
           {particles.map((p) => (
             <motion.div
               key={p.id}
               className="absolute rounded-full opacity-30"
               style={{ 
                 left: p.left, 
                 top: p.top, 
                 width: p.size, 
                 height: p.size,
                 backgroundColor: p.color
               }}
               animate={{
                 y: [0, -400],
                 opacity: [0, 0.4, 0],
                 scale: [1, 1.5, 1]
               }}
               transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
             />
           ))}
         </div>
         
         <div className="absolute inset-0 bg-hero-pattern opacity-[0.03]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-colors cursor-default"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                opacity: [1, 0.6, 1],
                scale: [1, 1.3, 1]
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <Sparkles size={14} className="text-tertiary-400" />
            </motion.div>
            <span className="text-secondary-100 text-sm font-semibold tracking-wide uppercase">
              {content.hero.tagline}
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            <div className="flex flex-wrap justify-center gap-x-4">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotate: -15 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.1 + (i * 0.1),
                    type: "spring",
                    stiffness: 200,
                    damping: 12
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.span 
              initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.8, type: "spring" }}
              className="text-gradient block mt-2"
            >
              {content.hero.titleEnd}
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {content.hero.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
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

        {/* Hero Visual Mockup with Zoom and Saturation */}
        <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, rotateX: 20, y: 100 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, type: "spring" }}
            className="mt-20 md:mt-32 relative mx-auto max-w-6xl perspective-1000"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-secondary-500/20 blur-[60px] -z-10 rounded-full opacity-50"></div>

            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl ring-1 ring-white/10 group cursor-crosshair"
            >
                <div className="h-10 bg-slate-900/80 border-b border-white/5 flex items-center px-6 gap-2">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                </div>
                <div className="relative overflow-hidden">
                    <motion.img 
                        whileHover={{ scale: 1.1, filter: "saturate(1.6)" }}
                        transition={{ duration: 0.8 }}
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                        alt="Dashboard Analytics" 
                        loading="eager"
                        className="w-full h-auto opacity-90 transition-all"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                </div>
            </motion.div>

            <motion.div 
                style={{ y: y2 }}
                className="absolute -right-8 -top-12 md:-right-12 md:-top-20 bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl"
            >
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                          <Sparkles size={20} />
                        </motion.div>
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
