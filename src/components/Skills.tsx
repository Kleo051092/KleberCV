import React from 'react';
import { motion } from 'motion/react';
import { getSkillsData } from '../data';
import { Skill } from '../types';
import { Binary, Database, BarChart3, Brain, TrendingUp, Cpu, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { translations } from '../translations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Binary: Binary,
  Database: Database,
  BarChart3: BarChart3,
  Brain: Brain,
  TrendingUp: TrendingUp,
  Cpu: Cpu,
};

const professionalSkillsEs = [
  { name: 'Pensamiento Lógico-Analítico', desc: 'Descomposición de problemas masivos y estructuración de flujos limpios.' },
  { name: 'Resolución de Problemas', desc: 'Identificación de cuellos de botella y diseño de mecanismos de mitigación.' },
  { name: 'Comunicación Efectiva', desc: 'Traducción de datos técnicos complejos a valor estratégico para la junta directiva.' },
  { name: 'Liderazgo y Trabajo en Equipo', desc: 'Coordinación con gerentes de auditoría, finanzas y operaciones.' },
  { name: 'Gestión de Riesgos', desc: 'Evaluación y mitigación proactiva de desvíos organizacionales y regulatorios.' },
  { name: 'Mejora Continua', desc: 'Búsqueda incansable de la optimización en procesos heredados o manuales.' },
  { name: 'Autonomía', desc: 'Foco estricto en metas, alta concentración y compromiso con la confidencialidad.' },
  { name: 'Adaptabilidad', desc: 'Rápida asimilación de normativas cambiantes y nuevas herramientas.' },
  { name: 'Capacitación Estratégica', desc: 'Transferencia estructurada de conocimiento técnico al equipo.' }
];

const professionalSkillsEn = [
  { name: 'Logical-Analytical Thinking', desc: 'Decomposing massive problems and structuring clean workflows.' },
  { name: 'Problem Solving', desc: 'Identifying bottlenecks and designing mitigation mechanisms.' },
  { name: 'Effective Communication', desc: 'Translating complex technical data into strategic value for the board of directors.' },
  { name: 'Leadership & Teamwork', desc: 'Coordination with audit, finance, and operations managers.' },
  { name: 'Risk Management', desc: 'Proactive assessment and mitigation of organizational and regulatory deviations.' },
  { name: 'Continuous Improvement', desc: 'Relentless pursuit of optimization in legacy or manual processes.' },
  { name: 'Autonomy', desc: 'Strict focus on goals, high concentration, and commitment to confidentiality.' },
  { name: 'Adaptability', desc: 'Rapid assimilation of changing regulations and new tools.' },
  { name: 'Strategic Training', desc: 'Structured transfer of technical knowledge to the team.' }
];

export default function Skills({ language }: { language: 'es' | 'en' }) {
  const t = translations[language];
  const skillsData = getSkillsData(language);
  const professionalSkills = language === 'es' ? professionalSkillsEs : professionalSkillsEn;

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-slate-950/60 border-t border-b border-slate-900/60 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-96 bg-brand-green/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-blue">{t.skillsSectionTitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
            {t.skillsTitle}
          </h3>
          <p className="text-slate-400 text-sm md:text-base">
            {t.skillsDescription}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill: Skill, index: number) => {
            const IconComponent = iconMap[skill.icon] || Binary;
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Radial Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-brand-blue to-brand-green group-hover:h-full transition-all duration-300" />

                <div className="flex items-start gap-4">
                  {/* Icon Container */}
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-brand-blue group-hover:text-brand-green group-hover:border-brand-green/20 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Skill Content */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-semibold font-display text-white group-hover:text-brand-green transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                        skill.category === 'ai' 
                          ? 'bg-emerald-950/40 border-emerald-800/50 text-brand-green' 
                          : skill.category === 'core' 
                          ? 'bg-blue-950/40 border-blue-800/50 text-brand-blue'
                          : 'bg-slate-900 border-slate-800 text-slate-400'
                      }`}>
                        {skill.category === 'ai' ? t.skillsCategoryAi : skill.category === 'core' ? t.skillsCategoryCore : skill.category === 'tool' ? t.skillsCategoryTool : t.skillsCategoryDomain}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Habilidades Profesionales Section */}
        <div className="mt-24 pt-12 border-t border-slate-900/60">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-green/5 border border-brand-green/10 text-[10px] font-mono text-brand-green uppercase tracking-wider">
              <HeartHandshake className="w-3 h-3" />
              <span>{t.skillsProfBadge}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white">{t.skillsProfTitle}</h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              {t.skillsProfDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {professionalSkills.map((profSkill, index) => (
              <motion.div
                key={profSkill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4.5 rounded-xl bg-slate-900/20 border border-slate-900/80 hover:border-slate-800/60 transition-colors flex items-start gap-3"
              >
                <div className="p-1 rounded bg-brand-green/10 text-brand-green border border-brand-green/20 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white font-mono tracking-wide uppercase">
                    {profSkill.name}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {profSkill.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
