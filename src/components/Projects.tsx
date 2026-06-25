import { useState } from 'react';
import { motion } from 'motion/react';
import { getProjectData, getChartData } from '../data';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { BarChart2, ShieldAlert } from 'lucide-react';
import { translations } from '../translations';

export default function Projects({ language }: { language: 'es' | 'en' }) {
  const [activeTab, setActiveTab] = useState<'ml' | 'both'>('both');
  const t = translations[language];
  const projectData = getProjectData(language);
  const chartData = getChartData(language);

  // Custom Tooltip component for the Line Chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-950/95 border border-slate-800 p-3.5 rounded-lg shadow-xl backdrop-blur-md">
          <p className="text-xs font-mono text-slate-400 mb-1.5 font-semibold uppercase">{label}</p>
          <div className="space-y-1">
            {payload.map((item: any) => (
              <div key={item.name} className="flex items-center gap-3 justify-between">
                <span className="flex items-center gap-1.5 text-xs text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}:
                </span>
                <span className="text-xs font-mono font-bold" style={{ color: item.color }}>
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative grid-glow">
      {/* Decorative Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-blue-glow rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-brand-green-glow rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4 text-left">
          <h2 className="text-xs font-mono uppercase tracking-widest text-brand-green">{t.projectsSectionTitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
            {t.projectsTitle}
          </h3>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl">
            {t.projectsDescription}
          </p>
        </div>

        {/* Dashboard Frame (The Dashboard Approach 2-Column Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Project Description */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-md relative overflow-hidden"
          >
            {/* Ambient indicator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-blue/10 to-transparent pointer-events-none" />
            
            <div className="space-y-6">
              {/* Card Header with Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-brand-blue-glow border border-brand-blue/30 text-[10px] font-mono text-brand-blue font-semibold uppercase tracking-wider">
                  {t.projectsBadgeBusinessCase}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/35 border border-brand-green/30 text-[10px] font-mono text-brand-green font-semibold uppercase tracking-wider">
                  {t.projectsBadgeRoi}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h4 className="text-2xl font-bold font-display text-white">
                  {projectData.title}
                </h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                  {projectData.description}
                </p>
              </div>

              {/* Technologies list */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">{t.projectsToolsApplied}</span>
                <div className="flex flex-wrap gap-1.5">
                  {projectData.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Impact KPIs */}
            <div className="pt-8 border-t border-slate-900 grid grid-cols-2 gap-4 mt-8">
              {projectData.metrics.map((metric) => (
                <div key={metric.label} className="p-3.5 rounded-xl bg-slate-900/30 border border-slate-900 hover:border-slate-800/50 transition-colors">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1 line-clamp-1">
                    {metric.label}
                  </div>
                  <div className="text-lg md:text-xl font-bold font-display text-white flex items-baseline gap-1.5">
                    {metric.value}
                    {metric.improved && (
                      <span className="text-[10px] font-mono text-brand-green font-semibold">↑ Ok</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Recharts Interactive Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-md flex flex-col justify-between"
          >
            {/* Dashboard Header controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-900">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-brand-green" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">{t.projectsPredictiveDemand}</span>
                </div>
                <h5 className="text-base font-semibold text-white">{t.projectsAccuracyVsTraditional}</h5>
              </div>

              {/* Chart Mode Selector */}
              <div className="flex bg-slate-900 border border-slate-800 p-0.5 rounded-lg text-xs font-mono">
                <button
                  onClick={() => setActiveTab('ml')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === 'ml' 
                      ? 'bg-brand-blue text-white shadow' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.projectsOnlyMl}
                </button>
                <button
                  onClick={() => setActiveTab('both')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === 'both' 
                      ? 'bg-brand-blue text-white shadow' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.projectsComparative}
                </button>
              </div>
            </div>

            {/* Recharts Chart Container */}
            <div className="h-72 md:h-80 w-full font-mono text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    stroke="#64748b" 
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    axisLine={{ stroke: '#334155' }}
                  />
                  <YAxis 
                    stroke="#64748b" 
                    domain={[60, 100]}
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    axisLine={{ stroke: '#334155' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    verticalAlign="top" 
                    height={36} 
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ paddingBottom: '10px' }}
                  />
                  
                  {activeTab === 'both' && (
                    <Line
                      name={t.projectsBaselineLegend}
                      type="monotone"
                      dataKey="baseline"
                      stroke="#ef4444"
                      strokeDasharray="4 4"
                      strokeWidth={1.5}
                      dot={{ r: 3, fill: '#ef4444' }}
                      activeDot={{ r: 5 }}
                    />
                  )}
                  
                  <Line
                    name={t.projectsMlLegend}
                    type="monotone"
                    dataKey="accuracy"
                    stroke="#10b981"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: '#10b981' }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Chart footer / notes */}
            <div className="mt-6 p-4 rounded-xl bg-slate-900/40 border border-slate-900 text-[11px] text-slate-400 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <span className="font-semibold text-slate-300">{t.projectsChartFooterTitle}</span> {t.projectsChartFooterText}
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
