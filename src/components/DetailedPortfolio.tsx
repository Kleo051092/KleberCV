import { useState } from 'react';
import { motion } from 'motion/react';
import { getProjectsDataList } from '../data';
import { Project } from '../types';
import { 
  Compass, 
  ChevronRight, 
  Layers, 
  ArrowLeft,
  Filter,
  Search
} from 'lucide-react';
import { translations } from '../translations';

export default function DetailedPortfolio({ language, onBackToProfile }: { language: 'es' | 'en', onBackToProfile: () => void }) {
  const t = translations[language];
  const projectsDataList = getProjectsDataList(language);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projectsDataList[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  // Derive the active project based on the current ID and language
  const selectedProject = projectsDataList.find(p => p.id === selectedProjectId) || projectsDataList[0];

  // S&OP Dashboard details
  const [sopZoneFilter, setSopZoneFilter] = useState<'TODOS' | 'GAM' | 'RURAL'>('TODOS');

  // Suzuki Filter
  const [suzukiModel, setSuzukiModel] = useState<'GIXXER-150' | 'OTRO'>('GIXXER-150');

  const categories = [
    { id: 'all', name: t.categoryAll },
    { id: 'finance', name: t.categoryFinance },
    { id: 'sales', name: t.categorySales },
    { id: 'predictive', name: t.categoryPredictive },
    { id: 'market', name: t.categoryMarket }
  ];

  const filteredProjects = projectsDataList.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getSopData = () => {
    if (sopZoneFilter === 'GAM') {
      return {
        units: '66 u.',
        revenue: '₡100.92M',
        predZone: 'GAM (100%)',
        vendors: [
          { name: 'Moises Espinoza Castillo', val: '12 u. (Top #1)' },
          { name: 'Almacen Mozel S.A.', val: '8 u.' }
        ]
      };
    }
    if (sopZoneFilter === 'RURAL') {
      return {
        units: '37 u.',
        revenue: '₡56.76M',
        predZone: 'Rural (100%)',
        vendors: [
          { name: 'Nayubhet de los Angeles', val: '8 u. (Top #1)' }
        ]
      };
    }
    return {
      units: '103 u. / 357 u.',
      revenue: '₡157.68M',
      predZone: 'GAM (64%) / Rural (36%)',
      vendors: [
        { name: 'Moises Espinoza Castillo', val: '12 u. (Top #1)' },
        { name: 'Almacen Mozel S.A.', val: '8 u.' },
        { name: 'Nayubhet de los Angeles', val: '8 u.' }
      ]
    };
  };

  const getSuzukiData = () => {
    if (suzukiModel === 'OTRO') {
      return {
        geo: [
          { label: 'Central (Gran Área Metropolitana)', val: '62%' },
          { label: 'Atlántico / Limón', val: '20%' },
          { label: 'Chorotega / Guanacaste', val: '18%' }
        ],
        demo: [
          { label: 'Rango Edad Principal (28-32 años)', val: '45%' },
          { label: 'Rango Edad Secundario (22-27 años)', val: '25%' },
          { label: 'Segmento de Género Masculino', val: '65%' }
        ],
        origin: 'WALKING / SUCURSAL (55%)'
      };
    }
    return {
      geo: [
        { label: 'Central (Gran Área Metropolitana)', val: '75%' },
        { label: 'Atlántico / Limón', val: '15%' },
        { label: 'Chorotega / Guanacaste', val: '10%' }
      ],
      demo: [
        { label: 'Rango Edad Principal (22-27 años)', val: '42%' },
        { label: 'Rango Edad Secundario (28-32 años)', val: '31%' },
        { label: 'Segmento de Género Masculino', val: '87%' }
      ],
      origin: 'VIRTUAL / REDES SOCIALES (42%)'
    };
  };

  // Helper functions to translate chart values dynamically based on current language
  const formatVendorVal = (val: string) => {
    if (language === 'es') return val;
    return val.replace('u.', 'units');
  };

  const translateSuzukiLabel = (label: string) => {
    if (language === 'es') return label;
    if (label.includes('Central (Gran Área Metropolitana)')) return 'Central (Greater Metropolitan Area)';
    if (label.includes('Atlántico / Limón')) return 'Atlantic / Limon';
    if (label.includes('Chorotega / Guanacaste')) return 'Chorotega / Guanacaste';
    if (label.includes('Rango Edad Principal (28-32 años)')) return 'Main Age Range (28-32 years)';
    if (label.includes('Rango Edad Principal (22-27 años)')) return 'Main Age Range (22-27 years)';
    if (label.includes('Rango Edad Secundario (22-27 años)')) return 'Secondary Age Range (22-27 years)';
    if (label.includes('Rango Edad Secundario (28-32 años)')) return 'Secondary Age Range (28-32 years)';
    if (label.includes('Segmento de Género Masculino')) return 'Male Gender Segment';
    return label;
  };

  const translateSuzukiOrigin = (origin: string) => {
    if (language === 'es') return origin;
    return origin
      .replace('VIRTUAL / REDES SOCIALES', 'VIRTUAL / SOCIAL MEDIA')
      .replace('WALKING / SUCURSAL', 'WALKING / BRANCH');
  };

  const zoneLabels = language === 'es' ? ['TODOS', 'GAM', 'RURAL'] : ['ALL', 'GAM', 'RURAL'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans pb-20 selection:bg-brand-blue/30 selection:text-white">
      {/* Mini Breadcrumb/Header */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-8">
        <button 
          onClick={onBackToProfile}
          className="group inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-brand-green transition-colors py-2 px-3 rounded-lg bg-slate-900/30 border border-slate-900 hover:border-slate-800"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>{t.detBackBtn}</span>
        </button>
      </div>

      {/* Hero Header */}
      <section className="relative py-12 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue-glow rounded-full blur-[140px] pointer-events-none opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green-glow rounded-full blur-[140px] pointer-events-none opacity-40" />

        <div className="max-w-6xl mx-auto relative z-10 text-left space-y-4">
          <div className="flex items-center gap-2 text-brand-green font-mono text-xs uppercase tracking-widest">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>{t.detPortfolioTitleBadge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            {t.detMainTitle}
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed">
            {t.detHeroDesc}
          </p>
        </div>
      </section>

      {/* Interactive Main Body */}
      <section className="max-w-6xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Project Navigator & Search */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Search and Category Filters */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-900 backdrop-blur-md space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-brand-blue" />
              <span>{t.detFilterTitle}</span>
            </h3>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder={t.detSearchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pl-9 pr-4 text-xs font-mono text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-brand-blue transition-colors"
              />
            </div>

            {/* Category Buttons list */}
            <div className="space-y-1.5 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    // Select first project matching new category
                    const matched = projectsDataList.find(p => cat.id === 'all' || p.category === cat.id);
                    if (matched) setSelectedProjectId(matched.id);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center justify-between border ${
                    selectedCategory === cat.id
                      ? 'bg-brand-blue/10 border-brand-blue/30 text-white font-semibold'
                      : 'bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <span>{cat.name}</span>
                  <ChevronRight className={`w-3.5 h-3.5 opacity-60 transform transition-transform ${selectedCategory === cat.id ? 'translate-x-0.5' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          {/* List of matched projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold pl-1">
              {t.detResultsCount} ({filteredProjects.length})
            </h4>

            {filteredProjects.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-slate-900/20 border border-slate-900 font-mono text-xs text-slate-600">
                {t.detNoResults}
              </div>
            ) : (
              <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin">
                {filteredProjects.map((proj) => {
                  const isSelected = selectedProjectId === proj.id;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => setSelectedProjectId(proj.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all border ${
                        isSelected
                          ? 'bg-slate-900 border-slate-700/80 shadow-lg shadow-black/30'
                          : 'bg-slate-950/40 border-slate-900 hover:border-slate-800 hover:bg-slate-900/20'
                      }`}
                    >
                      <span className="text-[10px] font-mono text-brand-green uppercase tracking-widest block mb-1">
                        {proj.category === 'finance' ? t.categoryFinance : 
                         proj.category === 'sales' ? t.categorySales : 
                         proj.category === 'predictive' ? t.categoryPredictive : t.categoryMarket}
                      </span>
                      <h5 className="text-xs font-bold text-white font-display mb-1.5 line-clamp-1">
                        {proj.title}
                      </h5>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2.5">
                        {proj.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                            {tag}
                          </span>
                        ))}
                        {proj.tags.length > 3 && (
                          <span className="text-[9px] font-mono text-slate-500 px-1 py-0.5">+{proj.tags.length - 3}</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Detailed Project Inspector (High-Fidelity UI Presentation) */}
        <div className="lg:col-span-8">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-slate-950 border border-slate-850 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Window chrome header */}
            <div className="px-5 py-4 border-b border-slate-900 bg-slate-950/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-[10px] font-mono text-slate-500 ml-2 tracking-wide">
                  {t.detVisorTitle}
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-brand-green/10 text-brand-green border border-brand-green/20 text-[9px] font-mono tracking-widest uppercase">
                {selectedProject.category}
              </span>
            </div>

            {/* Core Project Details */}
            <div className="p-6 md:p-8 space-y-6">
              
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Long Description */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  {t.detSectionSummary}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Custom High-Fidelity Interactive Layout (Simulating the PDF content directly!) */}
              <div className="border border-slate-900 rounded-2xl bg-slate-950 p-5 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-900">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-brand-green" />
                    {selectedProject.id === 'dashboard-resultados' ? t.detSectionInteractiveReport :
                     selectedProject.id === 'torre-control' ? t.detSectionMacroMonit :
                     selectedProject.id === 'distribucion-mercado' ? t.detSectionMarketSuzuki :
                     selectedProject.id === 'analisis-competencia' ? t.detSectionMarketCompet :
                     t.detSectionPredictiveVentas}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500">
                    *{language === 'es' ? 'Muestra interactiva con fines demostrativos' : 'Interactive view for demonstration purposes'}
                  </span>
                </div>

                {/* PROJECT 1 VIEW: Dashboard de Resultados S&OP */}
                {selectedProject.id === 'dashboard-resultados' && (() => {
                  const sopData = getSopData();
                  return (
                    <div className="space-y-4 font-mono text-xs text-slate-300">
                      {/* Interactive Zone Filter Controls */}
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-900/60 p-2.5 rounded-xl border border-slate-900 gap-2">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{t.detLabelZone}</span>
                        <div className="flex bg-slate-950 border border-slate-800 p-0.5 rounded-lg text-[10px]">
                          {zoneLabels.map((zone) => {
                            const internalZone = zone === 'ALL' || zone === 'TODOS' ? 'TODOS' : zone as 'GAM' | 'RURAL';
                            return (
                              <button
                                key={zone}
                                onClick={() => setSopZoneFilter(internalZone)}
                                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                                  sopZoneFilter === internalZone
                                    ? 'bg-brand-blue text-white font-semibold'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                              >
                                {zone}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                          <span className="text-[10px] text-slate-500 block">{language === 'es' ? 'MAYO 2022' : 'MAY 2022'}</span>
                          <div className="text-lg font-bold text-white mt-1">103 <span className="text-[10px] font-normal text-slate-400">{language === 'es' ? '/ 357 u.' : '/ 357 units'}</span></div>
                          <span className="text-[9px] text-slate-450">{language === 'es' ? 'Periodo Evaluado' : 'Evaluation Period'}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                          <span className="text-[10px] text-slate-500 block">{language === 'es' ? 'VENTAS FILTRADAS' : 'FILTERED SALES'}</span>
                          <div className="text-lg font-bold text-white mt-1">{formatVendorVal(sopData.units)}</div>
                          <span className="text-[9px] text-brand-green">{language === 'es' ? 'Colocación Neta' : 'Net Placement'}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                          <span className="text-[10px] text-slate-500 block">{language === 'es' ? 'FACTURACIÓN ZONAL' : 'ZONAL BILLING'}</span>
                          <div className="text-lg font-bold text-white mt-1">{sopData.revenue}</div>
                          <span className="text-[9px] text-slate-400">
                            {sopData.predZone.replace('GAM', 'GAM').replace('Rural', language === 'es' ? 'Rural' : 'Rural')}
                          </span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-900 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white uppercase">{language === 'es' ? `Ranking de Vendedores (${sopZoneFilter})` : `Salesperson Ranking (${sopZoneFilter === 'TODOS' ? 'ALL' : sopZoneFilter})`}</span>
                          <span className="text-[10px] text-slate-500">{language === 'es' ? 'Unidades Netas' : 'Net Units'}</span>
                        </div>
                        <div className="space-y-1.5 text-[11px]">
                          {sopData.vendors.map((vendor, idx) => (
                            <div 
                              key={vendor.name} 
                              className={`flex justify-between items-center py-1 ${
                                idx < sopData.vendors.length - 1 ? 'border-b border-slate-950' : ''
                              }`}
                            >
                              <span className="text-slate-400">{vendor.name}</span>
                              <span className={`font-bold ${idx === 0 ? 'text-brand-green' : 'text-slate-200'}`}>
                                {formatVendorVal(vendor.val)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="text-[10px] text-slate-500 text-center italic">
                        {language === 'es' 
                          ? '*Los datos se presentan simulados y consolidados bajo políticas de estricta confidencialidad de la junta directiva.' 
                          : '*Data is simulated and consolidated under strict board of directors confidentiality policies.'}
                      </p>
                    </div>
                  );
                })()}

                {/* PROJECT 2 VIEW: Torre de Control BCCR */}
                {selectedProject.id === 'torre-control' && (
                  <div className="space-y-4 font-mono text-xs text-slate-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* BCCR Live data extract */}
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-slate-800 pb-2">
                          {language === 'es' ? 'Extracción Webservice BCCR' : 'BCCR Webservice Extraction'}
                        </span>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-slate-500">{language === 'es' ? 'Tasa Política Monetaria (TPM)' : 'Monetary Policy Rate (TPM)'}</span>
                            <span className="text-white font-semibold">4.00%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">{language === 'es' ? 'Tasa Básica Pasiva (TBP)' : 'Passive Basic Rate (TBP)'}</span>
                            <span className="text-white font-semibold">3.99%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">{language === 'es' ? 'Tipo de Cambio Venta' : 'Selling Exchange Rate'}</span>
                            <span className="text-white font-semibold">₡512.14</span>
                          </div>
                        </div>
                        <div className="pt-1.5 flex items-center gap-1.5 text-[9px] text-brand-green">
                          <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-ping" />
                          <span>{language === 'es' ? 'Actualizado automáticamente (Python API)' : 'Automatically updated (Python API)'}</span>
                        </div>
                      </div>

                      {/* Internal Risk Matrix */}
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                        <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-slate-800 pb-2">
                          {language === 'es' ? 'Métricas Internas de Riesgo' : 'Internal Risk Metrics'}
                        </span>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-500">{language === 'es' ? 'Mora Legal' : 'Legal Delinquency'}</span>
                            <span className="text-emerald-400 bg-emerald-950/30 px-1.5 py-0.5 rounded text-[10px] font-semibold">{language === 'es' ? 'BAJO CONTROL' : 'UNDER CONTROL'}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-500">{language === 'es' ? 'Mora > 90 días' : 'Delinquency > 90 days'}</span>
                            <span className="text-emerald-400 bg-emerald-950/30 px-1.5 py-0.5 rounded text-[10px] font-semibold">{language === 'es' ? 'DENTRO DE LÍMITES' : 'WITHIN LIMITS'}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-500">{language === 'es' ? 'Ratio de Liquidez (ICL)' : 'Liquidity Ratio (ICL)'}</span>
                            <span className="text-emerald-400 bg-emerald-950/30 px-1.5 py-0.5 rounded text-[10px] font-semibold">{language === 'es' ? 'ÓPTIMO' : 'OPTIMAL'}</span>
                          </div>
                        </div>
                        <span className="text-[9px] text-slate-500 block pt-1.5">
                          {language === 'es' ? 'Base de cumplimiento normativo SUGEF 2-10' : 'Basis of SUGEF 2-10 regulatory compliance'}
                        </span>
                      </div>

                    </div>
                  </div>
                )}

                {/* PROJECT 3 VIEW: Forecasting */}
                {selectedProject.id === 'forecasting-ventas' && (
                  <div className="space-y-4 font-mono text-xs text-slate-300">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          {language === 'es' ? 'Modelo Predictivo: Simulación de Ventas Futuras' : 'Predictive Model: Future Sales Simulation'}
                        </span>
                        <span className="text-[10px] text-slate-400 bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/20">
                          {language === 'es' ? 'Algoritmo Integrado' : 'Integrated Algorithm'}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between border-b border-slate-800/50 py-1">
                          <span className="text-slate-400">{language === 'es' ? 'Ciclo Histórico Evaluado' : 'Evaluated Historical Cycle'}</span>
                          <span className="text-white">{language === 'es' ? '60 meses' : '60 months'}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800/50 py-1">
                          <span className="text-slate-400">{language === 'es' ? 'Nivel de Confianza Comercial' : 'Commercial Confidence Level'}</span>
                          <span className="text-brand-green font-bold">95.0%</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800/50 py-1">
                          <span className="text-slate-400">{language === 'es' ? 'Margen de Error Máximo' : 'Maximum Margin of Error'}</span>
                          <span className="text-slate-300 font-semibold">&lt; 4.2%</span>
                        </div>
                      </div>

                      <div className="h-28 flex items-end justify-between gap-2.5 pt-4">
                        <div className="w-full flex flex-col items-center gap-1.5">
                          <div className="w-full bg-slate-800 rounded-t h-16 relative">
                            <div className="absolute inset-x-0 bottom-0 bg-brand-blue/30 h-[92%] rounded-t" />
                          </div>
                          <span className="text-[10px] text-slate-500">{language === 'es' ? 'Histórico' : 'Historical'}</span>
                        </div>
                        <div className="w-full flex flex-col items-center gap-1.5">
                          <div className="w-full bg-slate-800 rounded-t h-20 relative">
                            <div className="absolute inset-x-0 bottom-0 bg-brand-green/30 h-[95%] rounded-t" />
                          </div>
                          <span className="text-[10px] text-slate-400">{language === 'es' ? 'Fitted (Ciclos)' : 'Fitted (Cycles)'}</span>
                        </div>
                        <div className="w-full flex flex-col items-center gap-1.5">
                          <div className="w-full bg-slate-800 rounded-t h-24 relative border-t-2 border-dashed border-brand-green">
                            <div className="absolute inset-x-0 bottom-0 bg-brand-green/40 h-[100%] rounded-t" />
                          </div>
                          <span className="text-[10px] text-brand-green font-bold">{language === 'es' ? 'Pronóstico' : 'Forecast'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* PROJECT 4 VIEW: Distribución Suzuki */}
                {selectedProject.id === 'distribucion-mercado' && (() => {
                  const suzukiData = getSuzukiData();
                  return (
                    <div className="space-y-4 font-mono text-xs text-slate-300">
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-800 pb-2">
                          <div>
                            <span className="text-xs font-bold text-white uppercase block">
                              {suzukiModel === 'GIXXER-150' ? 'Suzuki GIXXER-150 / 300K+ Registros' : (language === 'es' ? 'Otros Modelos (Scooter, Eléctricas)' : 'Other Models (Scooter, Electric)')}
                            </span>
                            <span className="text-[10px] text-slate-500">{language === 'es' ? 'Segmentación de Mercado de Motocicletas' : 'Motorcycle Market Segmentation'}</span>
                          </div>
                          <div className="flex gap-1">
                            <button 
                              onClick={() => setSuzukiModel('GIXXER-150')}
                              className={`px-2 py-0.5 rounded text-[10px] border cursor-pointer ${suzukiModel === 'GIXXER-150' ? 'bg-brand-blue/10 border-brand-blue/30 text-white' : 'border-slate-800 text-slate-500 hover:text-slate-300'}`}
                            >
                              GIXXER-150
                            </button>
                            <button 
                              onClick={() => setSuzukiModel('OTRO')}
                              className={`px-2 py-0.5 rounded text-[10px] border cursor-pointer ${suzukiModel === 'OTRO' ? 'bg-brand-blue/10 border-brand-blue/30 text-white' : 'border-slate-800 text-slate-500'}`}
                            >
                              {language === 'es' ? 'Otros Modelos' : 'Other Models'}
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px]">
                          <div className="space-y-1.5">
                            <span className="text-slate-500 block uppercase tracking-wider text-[9px] font-bold">{language === 'es' ? 'Ubicaciones Geográficas' : 'Geographic Locations'}</span>
                            {suzukiData.geo.map((g) => (
                              <div key={g.label} className="flex justify-between">
                                <span className="text-slate-400">{translateSuzukiLabel(g.label)}</span>
                                <span className="text-white font-bold">{g.val}</span>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-1.5">
                            <span className="text-slate-500 block uppercase tracking-wider text-[9px] font-bold">{language === 'es' ? 'Demografía Compradora' : 'Buyer Demographics'}</span>
                            {suzukiData.demo.map((d) => (
                              <div key={d.label} className="flex justify-between">
                                <span className="text-slate-400">{translateSuzukiLabel(d.label)}</span>
                                <span className="text-white font-bold">{d.val}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3 bg-slate-950 rounded-lg border border-slate-900 flex items-center justify-between text-[10px]">
                          <span className="text-slate-400">{language === 'es' ? 'Origen Comercial Principal:' : 'Main Commercial Origin:'}</span>
                          <span className="text-white font-bold uppercase text-brand-green bg-brand-green/5 px-2 py-0.5 rounded border border-brand-green/20">
                            {translateSuzukiOrigin(suzukiData.origin)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* PROJECT 5 VIEW: Análisis de Competencia */}
                {selectedProject.id === 'analisis-competencia' && (
                  <div className="space-y-4 font-mono text-xs text-slate-300">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                      <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-slate-800 pb-2">
                        {language === 'es' ? 'Cuota de Mercado de Motocicletas (Scooters & Sport)' : 'Motorcycle Market Share (Scooters & Sport)'}
                      </span>
                      
                      <div className="space-y-2.5 pt-1 text-[11px]">
                        <div>
                          <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                            <span>{language === 'es' ? 'CATEGORÍA SPORT - NUESTRAS MARCAS' : 'SPORT CATEGORY - OUR BRANDS'}</span>
                            <span className="text-white font-bold">{language === 'es' ? '38.2% de Market Share' : '38.2% Market Share'}</span>
                          </div>
                          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850">
                            <div className="bg-brand-blue h-full rounded-full" style={{ width: '38.2%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                            <span>{language === 'es' ? 'CATEGORÍA SCOOTER - NUESTRAS MARCAS' : 'SCOOTER CATEGORY - OUR BRANDS'}</span>
                            <span className="text-white font-bold">{language === 'es' ? '33.2% de Market Share' : '33.2% Market Share'}</span>
                          </div>
                          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850">
                            <div className="bg-brand-green h-full rounded-full" style={{ width: '33.2%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                            <span>{language === 'es' ? 'COMPETENCIA DIRECTA (Grupo A / Marcas B)' : 'DIRECT COMPETITION (Group A / Brands B)'}</span>
                            <span className="text-white font-bold">{language === 'es' ? '28.6% de Market Share' : '28.6% Market Share'}</span>
                          </div>
                          <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850">
                            <div className="bg-slate-700 h-full rounded-full" style={{ width: '28.6%' }} />
                          </div>
                        </div>
                      </div>

                      <p className="text-[10px] text-slate-500 italic pt-2">
                        {language === 'es' 
                          ? '*Análisis cruzado de bases de datos externas de aduanas e importaciones con comparativas interanuales de USD.' 
                          : '*Cross-analysis of external customs and import databases with YoY USD comparisons.'}
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Performance Impact Metrics Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  {language === 'es' ? 'Impacto Cuantificable del Proyecto' : 'Quantifiable Project Impact'}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedProject.metrics.map(metric => (
                    <div key={metric.label} className="p-4 rounded-xl bg-slate-900/30 border border-slate-900 flex flex-col justify-between">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2 leading-tight">
                        {metric.label}
                      </span>
                      <span className="text-base font-bold text-white font-display flex items-center gap-1">
                        {metric.value}
                        {metric.improved && (
                          <span className="text-[10px] text-brand-green">✓</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </section>
    </div>
  );
}
