import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { COMPANY_NAME } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { content, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group relative z-50">
          <div className={`p-1.5 rounded-xl transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
            <Logo className="h-8 md:h-10 w-auto" />
          </div>
          <span className={`text-xl md:text-2xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            {COMPANY_NAME}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {content.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative group py-2"
            >
              <span className={`text-sm font-semibold transition-colors duration-300 ${
                scrolled 
                  ? 'text-slate-600 group-hover:text-primary-600' 
                  : 'text-slate-200 group-hover:text-white'
              }`}>
                {item.label}
              </span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                scrolled ? 'bg-primary-600' : 'bg-secondary-400'
              }`}></span>
            </a>
          ))}

          {/* Language Switcher Desktop */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 hover:scale-105 ${
                scrolled 
                    ? 'border-slate-200 bg-slate-100 text-slate-700 hover:border-primary-500' 
                    : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Globe size={16} />
            <span className="text-xs font-bold uppercase">{language}</span>
          </button>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className={`relative overflow-hidden px-6 py-2.5 text-sm font-bold rounded-full shadow-lg transition-all group ${
              scrolled
                ? 'bg-slate-900 text-white hover:bg-slate-800'
                : 'bg-white text-primary-600 hover:bg-slate-50'
            }`}
          >
            <span className="relative z-10">{content.contact.label}</span>
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                scrolled ? 'bg-white' : 'bg-primary-600'
            }`}></div>
          </motion.a>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-4 relative z-50">
            {/* Language Switcher Mobile */}
            <button
                onClick={toggleLanguage}
                className={`flex items-center gap-1 px-2 py-1 rounded-full border transition-all duration-300 ${
                    scrolled 
                        ? 'border-slate-200 bg-slate-100 text-slate-700' 
                        : 'border-white/20 bg-white/10 text-white'
                }`}
            >
                <span className="text-xs font-bold uppercase">{language}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
            {isOpen ? (
                <X size={28} className="text-slate-900" />
            ) : (
                <Menu size={28} className={scrolled ? 'text-slate-900' : 'text-white'} />
            )}
            </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="md:hidden absolute top-0 left-0 right-0 h-screen bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-center px-8 gap-8"
          >
            <div className="flex flex-col gap-6">
            {content.nav.map((item, i) => (
              <motion.a
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + (i * 0.1) }}
                key={item.label}
                href={item.href}
                className="text-slate-800 font-bold text-3xl hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            </div>
            <motion.a
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="#contact"
              className="mt-8 w-full text-center px-6 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold rounded-2xl text-lg shadow-xl active:scale-95 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              {content.contact.label}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;