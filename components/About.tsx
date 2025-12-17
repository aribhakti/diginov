import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle2, Target, Eye, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { content } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] origin-center opacity-20"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, #e0f2fe 0deg, transparent 120deg, #f0fdf4 240deg, #e0f2fe 360deg)'
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full text-primary-600 text-sm font-semibold mb-6">
                    <Rocket size={14} />
                    <span>{content.about.label}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    {content.about.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {content.about.description}
                </p>
                <div className="flex gap-4 flex-wrap">
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="px-6 py-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-100 hover:border-primary-200 transition-colors shadow-sm"
                    >
                        <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                        <div className="text-sm text-slate-500 font-medium">{content.about.stats.products}</div>
                    </motion.div>
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="px-6 py-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-100 hover:border-secondary-200 transition-colors shadow-sm"
                    >
                        <div className="text-3xl font-bold text-secondary-600 mb-1">24/7</div>
                        <div className="text-sm text-slate-500 font-medium">{content.about.stats.support}</div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                className="lg:w-1/2 relative"
            >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Team Collaboration" 
                    loading="lazy"
                    decoding="async"
                    className="relative rounded-3xl shadow-2xl border border-white/50 w-full h-auto aspect-video object-cover"
                />
            </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white/70 backdrop-blur-md border border-slate-100 p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group cursor-default"
            >
                 <div className="absolute top-0 right-0 p-8 opacity-5 text-primary-600 transform group-hover:scale-110 transition-transform duration-500">
                    <Eye size={120} />
                </div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/30">
                        <Eye size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{content.about.visionTitle}</h3>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed relative z-10">
                    {content.about.vision}
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group cursor-default"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5 text-secondary-400 transform group-hover:scale-110 transition-transform duration-500">
                    <Target size={120} />
                </div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-500 text-white flex items-center justify-center shadow-lg shadow-secondary-500/30">
                        <Target size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{content.about.missionTitle}</h3>
                </div>
                <motion.ul 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-5 relative z-10"
                >
                    {content.about.mission.slice(0, 3).map((item, idx) => (
                        <motion.li key={idx} variants={itemVariants} className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-secondary-500/20 text-secondary-400 flex items-center justify-center shrink-0 mt-1 border border-secondary-500/30">
                                <CheckCircle2 size={14} />
                            </div>
                            <span className="text-slate-300 text-base">{item}</span>
                        </motion.li>
                    ))}
                    {content.about.mission.length > 3 && (
                        <motion.li variants={itemVariants} className="pt-2">
                             <span className="text-secondary-400 text-sm font-semibold cursor-pointer hover:underline">{content.about.readMore}</span>
                        </motion.li>
                    )}
                </motion.ul>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;