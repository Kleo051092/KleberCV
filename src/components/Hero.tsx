import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { translations } from '../translations';

export default function Hero({ language }: { language: 'es' | 'en' }) {
  const [imgSrc, setImgSrc] = useState(`${import.meta.env.BASE_URL}Perfil 2025.png`);
  const t = translations[language];
  
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8 grid-glow overflow-hidden">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 md:w-[500px] h-72 md:h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 md:w-[500px] h-72 md:h-[500px] bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text and CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-brand-green"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-green animate-pulse" />
            <span>{t.heroBadge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]"
          >
            {language === 'es' ? 'Transformando Datos en ' : 'Transforming Data into '}<span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">{language === 'es' ? 'Estrategia de Negocio' : 'Business Strategy'}</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light"
          >
            {t.heroDescriptionText}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#projects" 
              className="group px-6 py-3.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-blue-accent hover:from-brand-blue/90 hover:to-brand-blue-accent/90 text-white font-medium flex items-center gap-2 shadow-lg shadow-brand-blue/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{t.heroViewProjects}</span>
              <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-3.5 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Mail className="w-4.5 h-4.5 text-slate-400" />
              <span>{t.heroContact}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Professional Photograph Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Decorative Glass Card */}
          <div className="relative rounded-2xl bg-slate-950/40 border border-slate-800/80 backdrop-blur-md shadow-2xl overflow-hidden group max-w-sm mx-auto lg:max-w-none">
            {/* Ambient inner glow */}
            <div className="absolute -inset-px bg-gradient-to-tr from-brand-blue/15 via-transparent to-brand-green/15 rounded-2xl pointer-events-none z-10" />
            
            {/* The Photograph */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <img
                src={imgSrc}
                onError={() => {
                  if (imgSrc !== 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800') {
                    setImgSrc('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800');
                  }
                }}
                alt="Kleber José Villalobos Herrera"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              {/* Overlay with subtle dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
            </div>

            {/* Float badge content over photo */}
            <div className="absolute bottom-0 inset-x-0 p-6 z-20 space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
                </span>
                <span className="text-[10px] font-mono tracking-wider uppercase text-brand-green bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded-md">
                  {t.heroAvailableBadge}
                </span>
              </div>
              <h3 className="text-xl font-bold font-display text-white tracking-wide">
                Kleber J. Villalobos H.
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {t.heroLocation}
              </p>
            </div>
          </div>

          {/* Floating background shape for depth */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-brand-blue to-transparent opacity-20 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-tr from-brand-green to-transparent opacity-20 rounded-full blur-xl pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
