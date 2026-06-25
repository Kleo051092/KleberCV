import React, { useState } from 'react';
import { motion } from 'motion/react';
import { getTimelineData } from '../data';
import { Briefcase, Calendar, CheckSquare, Award, Search, Filter, ArrowLeft, Database, Sparkles } from 'lucide-react';
import { translations } from '../translations';

interface ExperiencePageProps {
  language: 'es' | 'en';
  onBackToProfile: () => void;
}

export default function ExperiencePage({ language, onBackToProfile }: ExperiencePageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const t = translations[language];
  const timelineData = getTimelineData(language);

  // Extract all unique technologies
  const allTechs = Array.from(
    new Set(timelineData.flatMap((item) => item.techUsed))
  ).sort();

  // Filter experience based on search and selected tech tag
  const filteredTimeline = timelineData.filter((item) => {
    const matchesSearch = 
      item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.impactPoints.some(pt => pt.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesTech = selectedTech ? item.techUsed.includes(selectedTech) : true;
    
    return matchesSearch && matchesTech;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Immersive background glows */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        {/* Navigation Breadcrumb / Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-900">
          <button
            onClick={onBackToProfile}
            className="self-start px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700/80 hover:bg-slate-900/60 transition-all text-xs font-mono text-slate-400 hover:text-white flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.expBackBtn}</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Sparkles className="w-4 h-4 text-brand-green" />
            <span>{language === 'es' ? 'Tercera Web | Experiencia Laboral Detallada' : 'Third Web | Detailed Work Experience'}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-mono text-brand-blue uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{language === 'es' ? '8+ Años de Experiencia' : '8+ Years of Experience'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            {t.expMainTitle}
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {t.expHeroDesc}
          </p>
        </div>

        {/* Search & Tech Tag Filtering Controls */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-900 backdrop-blur-md space-y-5">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={language === 'es' ? "Buscar por cargo, empresa, impacto o palabra clave..." : "Search by role, company, impact, or keyword..."}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-green/50 transition-colors font-mono"
              />
            </div>
            {/* Reset Button */}
            {(searchTerm || selectedTech) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTech(null);
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-brand-green hover:border-brand-green/30 transition-colors w-full md:w-auto"
              >
                {language === 'es' ? 'Limpiar Filtros' : 'Clear Filters'}
              </button>
            )}
          </div>

          {/* Tech Tags Filter */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> {language === 'es' ? 'Filtrar por Herramienta o Tecnología:' : 'Filter by Tool or Technology:'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {allTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all border ${
                    selectedTech === tech
                      ? 'bg-brand-green/20 text-brand-green border-brand-green/40 font-semibold'
                      : 'bg-slate-950/60 border-slate-900 text-slate-400 hover:text-white hover:border-slate-800'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          {filteredTimeline.length > 0 ? (
            <div className="relative border-l border-slate-900 ml-4 md:ml-36 space-y-16 py-4">
              {filteredTimeline.map((item, index) => (
                <motion.div
                   key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-12 group"
                >
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[17px] top-1 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:border-brand-green group-hover:text-brand-green transition-all duration-300 shadow-md">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    {index === 0 && !searchTerm && !selectedTech && (
                      <span className="absolute inset-0 rounded-full border border-brand-green/30 animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Period indicator (Desktop left side rail) */}
                  <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right font-mono text-xs text-slate-500 font-medium leading-normal">
                    {item.period}
                  </div>

                  {/* Core Experience Card */}
                  <div className="p-6 md:p-8 rounded-2xl bg-slate-900/35 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/40 transition-all duration-300 shadow-xl backdrop-blur-sm relative overflow-hidden">
                    {/* Glowing highlight in corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-green/3 to-transparent pointer-events-none" />
                    
                    {/* Mobile-only Period */}
                    <div className="md:hidden flex items-center gap-1.5 text-xs font-mono text-slate-500 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    {/* Card Header Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-green transition-colors duration-300">
                          {item.role}
                        </h3>
                        <p className="text-brand-blue font-mono text-xs font-medium mt-0.5">
                          {item.company}
                        </p>
                      </div>
                      
                      {index === 0 && !searchTerm && !selectedTech && (
                        <span className="self-start sm:self-center inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-green/10 border border-brand-green/20 text-[10px] font-mono text-brand-green font-semibold uppercase tracking-wide">
                          <Award className="w-3 h-3" /> {language === 'es' ? 'Último Rol' : 'Latest Role'}
                        </span>
                      )}
                    </div>

                    {/* Short Description text */}
                    <p className="text-slate-400 text-xs sm:text-sm italic mb-6 leading-relaxed border-l border-slate-800 pl-4">
                      {item.description}
                    </p>

                    {/* Bullet Achievements */}
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">{t.expLabelImpactResume}</span>
                      <ul className="space-y-3">
                        {item.impactPoints.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-3">
                            <CheckSquare className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                            <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Pills */}
                    <div className="mt-8 pt-5 border-t border-slate-900/60 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mr-2">{language === 'es' ? 'Foco Técnico:' : 'Technical Focus:'}</span>
                      {item.techUsed.map((tech) => (
                        <span
                          key={tech}
                          onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono cursor-pointer transition-all ${
                            selectedTech === tech
                              ? 'bg-brand-green/20 text-brand-green border border-brand-green/30'
                              : 'bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-900/20 border border-slate-900 rounded-2xl p-8 space-y-4">
              <Database className="w-12 h-12 text-slate-600 mx-auto animate-bounce" />
              <h3 className="text-lg font-bold font-display text-white">{language === 'es' ? 'No se encontraron experiencias' : 'No experiences found'}</h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
                {language === 'es' 
                  ? `No hay coincidencias con los términos de búsqueda "${searchTerm}" o el filtro de tecnología seleccionado. Intenta limpiar los filtros.`
                  : `No matches found for search terms "${searchTerm}" or the selected tech filter. Try clearing filters.`}
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTech(null);
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-brand-green hover:border-brand-green/35 transition-colors"
              >
                {language === 'es' ? 'Limpiar Filtros' : 'Clear Filters'}
              </button>
            </div>
          )}
        </div>

        {/* Back To Profile Bottom Call-to-action */}
        <div className="pt-8 text-center">
          <button
            onClick={onBackToProfile}
            className="px-6 py-2.5 rounded-xl bg-brand-green text-slate-950 font-mono font-bold text-xs hover:bg-white transition-all flex items-center gap-2 mx-auto shadow-lg shadow-brand-green/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.expBackBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
