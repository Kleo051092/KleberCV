import React from 'react';
import { motion } from 'motion/react';
import { getEducationData, getCertificationsData, getAdditionalInfoData } from '../data';
import { GraduationCap, Award, Globe, Calendar, ShieldCheck, ArrowLeft, Sparkles, BookOpen } from 'lucide-react';
import { translations } from '../translations';

interface EducationPageProps {
  language: 'es' | 'en';
  onBackToProfile: () => void;
}

export default function EducationPage({ language, onBackToProfile }: EducationPageProps) {
  const t = translations[language];
  const educationData = getEducationData(language);
  const certificationsData = getCertificationsData(language);
  const additionalInfoData = getAdditionalInfoData(language);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Immersive radial glows */}
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-brand-green/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-brand-blue/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Navigation / Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-900">
          <button
            onClick={onBackToProfile}
            className="self-start px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900/60 transition-all text-xs font-mono text-slate-400 hover:text-white flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.eduBackBtn}</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Sparkles className="w-4 h-4 text-brand-green" />
            <span>{language === 'es' ? 'Cuarta Web | Educación & Certificaciones' : 'Fourth Web | Education & Certifications'}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-xs font-mono text-brand-green uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Aprendizaje Continuo' : 'Continuous Learning'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            {t.eduMainTitle}
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {t.eduHeroDesc}
          </p>
        </div>

        {/* Main Grid Layout for Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-900">
              <GraduationCap className="w-5 h-5 text-brand-green" />
              <h2 className="text-lg font-bold font-display uppercase tracking-wider text-white">{t.eduTitleEducation}</h2>
            </div>

            <div className="space-y-4.5">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-5 rounded-xl bg-slate-900/30 border border-slate-900 hover:border-slate-800/80 transition-all relative overflow-hidden"
                >
                  {edu.isEnCurso && (
                    <div className="absolute top-0 right-0 h-full w-1 bg-brand-green" />
                  )}
                  
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono text-brand-blue font-semibold uppercase bg-brand-blue/5 border border-brand-blue/10 px-2 py-0.5 rounded">
                      {edu.period}
                    </span>
                    {edu.isEnCurso && (
                      <span className="text-[9px] font-mono text-brand-green font-bold uppercase bg-brand-green/10 border border-brand-green/25 px-2 py-0.5 rounded animate-pulse">
                        {t.eduLabelOngoing}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-brand-green transition-colors font-display">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    {edu.institution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-900">
              <Award className="w-5 h-5 text-brand-green" />
              <h2 className="text-lg font-bold font-display uppercase tracking-wider text-white">{t.eduTitleCertifications}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-slate-900/20 border border-slate-900 hover:border-slate-800/60 transition-colors flex flex-col justify-between h-full"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] font-mono text-slate-500 uppercase">
                        {cert.date}
                      </span>
                      {cert.isEnCurso && (
                        <span className="text-[9px] font-mono text-brand-green font-bold bg-brand-green/5 border border-brand-green/10 px-1.5 py-0.2 rounded animate-pulse">
                          {t.eduLabelOngoing}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-[11px] text-slate-500 mt-2 pt-2 border-t border-slate-900/60 font-mono">
                    {cert.institution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Additional Information Section */}
        <div className="mt-12 pt-8 border-t border-slate-900">
          <div className="flex items-center gap-2.5 mb-8">
            <BookOpen className="w-5 h-5 text-brand-green" />
            <h2 className="text-lg font-bold font-display uppercase tracking-wider text-white">{language === 'es' ? 'Información Adicional' : 'Additional Information'}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-900 space-y-3"
            >
              <div className="flex items-center gap-2 text-brand-blue">
                <Globe className="w-5 h-5" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wide text-white">{t.eduTitleLanguages}</h3>
              </div>
              <ul className="space-y-2">
                {additionalInfoData.languages.map((lang, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed border-l-2 border-slate-800 pl-3">
                    {lang}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Licenses */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-900 space-y-3"
            >
              <div className="flex items-center gap-2 text-brand-blue">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wide text-white">{t.eduTitleLicenses}</h3>
              </div>
              <ul className="space-y-2">
                {additionalInfoData.licenses.map((lic, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed border-l-2 border-slate-800 pl-3">
                    {lic}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-900 space-y-3"
            >
              <div className="flex items-center gap-2 text-brand-blue">
                <Calendar className="w-5 h-5" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wide text-white">{t.eduTitleAvailability}</h3>
              </div>
              <ul className="space-y-2">
                {additionalInfoData.availability.map((avail, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed border-l-2 border-slate-800 pl-3">
                    {avail}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Back To Profile Bottom Call-to-action */}
        <div className="pt-8 text-center">
          <button
            onClick={onBackToProfile}
            className="px-6 py-2.5 rounded-xl bg-brand-green text-slate-950 font-mono font-bold text-xs hover:bg-white transition-all flex items-center gap-2 mx-auto shadow-lg shadow-brand-green/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.eduBackBtn}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
