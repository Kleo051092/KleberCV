import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperiencePage from './components/ExperiencePage';
import EducationPage from './components/EducationPage';
import ContactFooter from './components/ContactFooter';
import DetailedPortfolio from './components/DetailedPortfolio';
import { translations } from './translations';
import { 
  Cpu, 
  FolderGit2, 
  User, 
  Briefcase, 
  GraduationCap, 
  Menu, 
  X,
  Mail,
  Download
} from 'lucide-react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'es' | 'en'>('en');
  const [currentPage, setCurrentPage] = useState<'profile' | 'projects' | 'experience' | 'education'>(() => {
    const hash = window.location.hash;
    if (hash === '#/proyectos') return 'projects';
    if (hash === '#/experiencia') return 'experience';
    if (hash === '#/estudios') return 'education';
    return 'profile';
  });

  const t = translations[language];

  useEffect(() => {
    const handleHashChange = (isInitial = false) => {
      const hash = window.location.hash;
      if (hash === '#/proyectos') {
        setCurrentPage('projects');
        window.scrollTo({ top: 0, behavior: isInitial ? 'auto' : 'smooth' });
      } else if (hash === '#/experiencia') {
        setCurrentPage('experience');
        window.scrollTo({ top: 0, behavior: isInitial ? 'auto' : 'smooth' });
      } else if (hash === '#/estudios') {
        setCurrentPage('education');
        window.scrollTo({ top: 0, behavior: isInitial ? 'auto' : 'smooth' });
      } else if (hash.startsWith('#') && !hash.startsWith('#/')) {
        setCurrentPage('profile');
        const elementId = hash.slice(1);
        setTimeout(() => {
          const el = document.getElementById(elementId);
          if (el) {
            el.scrollIntoView({ behavior: isInitial ? 'auto' : 'smooth' });
          }
        }, 100);
      } else {
        setCurrentPage('profile');
        if (!isInitial) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    handleHashChange(true);

    const listener = () => handleHashChange(false);
    window.addEventListener('hashchange', listener);
    return () => window.removeEventListener('hashchange', listener);
  }, []);

  const handleNavigation = (target: 'profile' | 'projects' | 'experience' | 'education') => {
    setIsOpen(false);
    if (currentPage !== target) {
      setCurrentPage(target);
      if (target === 'projects') {
        window.location.hash = '#/proyectos';
      } else if (target === 'experience') {
        window.location.hash = '#/experiencia';
      } else if (target === 'education') {
        window.location.hash = '#/estudios';
      } else {
        window.location.hash = '#/';
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-brand-blue/30 selection:text-white">
      
      {/* Top Sticky Header */}
      <header className="w-full bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-900/80">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <button 
            onClick={() => handleNavigation('profile')}
            className="flex items-center gap-2.5 text-left hover:opacity-90 transition-opacity"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-brand-green shrink-0">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-wider text-white uppercase block">{t.logoTitle}</span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block max-w-xs sm:max-w-none truncate">{t.logoSubtitle}</span>
            </div>
          </button>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation (MD and Above) */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 border border-slate-900 p-1 rounded-xl text-xs font-mono">
              <button
                onClick={() => handleNavigation('profile')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  currentPage === 'profile'
                    ? 'bg-brand-green/15 text-brand-green border border-brand-green/20 font-semibold'
                    : 'text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>{t.navProfile}</span>
              </button>
              <button
                onClick={() => handleNavigation('projects')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  currentPage === 'projects'
                    ? 'bg-brand-green/15 text-brand-green border border-brand-green/20 font-semibold'
                    : 'text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>{t.navProjects}</span>
              </button>
              <button
                onClick={() => handleNavigation('experience')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  currentPage === 'experience'
                    ? 'bg-brand-green/15 text-brand-green border border-brand-green/20 font-semibold'
                    : 'text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>{t.navExperience}</span>
              </button>
              <button
                onClick={() => handleNavigation('education')}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  currentPage === 'education'
                    ? 'bg-brand-green/15 text-brand-green border border-brand-green/20 font-semibold'
                    : 'text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{t.navEducation}</span>
              </button>
            </nav>

            {/* Language Selector (Pill Style) */}
            <div className="flex bg-slate-900 border border-slate-800/80 p-0.5 rounded-lg text-[10px] font-mono select-none shrink-0">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 rounded-md transition-all font-semibold flex items-center gap-1.5 ${
                  language === 'es'
                    ? 'bg-brand-green/20 text-brand-green font-bold'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <svg viewBox="0 0 16 12" className="w-3.5 h-2.5 rounded-xs object-cover shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="3" fill="#C1272D"/>
                  <rect y="3" width="16" height="6" fill="#FCD116"/>
                  <rect y="9" width="16" height="3" fill="#C1272D"/>
                  <rect x="3.5" y="4.5" width="2" height="3" rx="0.3" fill="#C1272D" opacity="0.85"/>
                </svg>
                <span>ES</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-md transition-all font-semibold flex items-center gap-1.5 ${
                  language === 'en'
                    ? 'bg-brand-green/20 text-brand-green font-bold'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <svg viewBox="0 0 16 12" className="w-3.5 h-2.5 rounded-xs object-cover shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="12" fill="#fff"/>
                  <path d="M0 0h16v1.2H0zm0 2.4h16v1.2H0zm0 2.4h16v1.2H0zm0 2.4h16v1.2H0zm0 2.4h16v1.2H0zm0 2.4h16v1.2H0z" fill="#B22234"/>
                  <rect width="7" height="6" fill="#3C3B6E"/>
                  <circle cx="1.5" cy="1.5" r="0.4" fill="#fff"/>
                  <circle cx="3.5" cy="1.5" r="0.4" fill="#fff"/>
                  <circle cx="5.5" cy="1.5" r="0.4" fill="#fff"/>
                  <circle cx="2.5" cy="3" r="0.4" fill="#fff"/>
                  <circle cx="4.5" cy="3" r="0.4" fill="#fff"/>
                  <circle cx="1.5" cy="4.5" r="0.4" fill="#fff"/>
                  <circle cx="3.5" cy="4.5" r="0.4" fill="#fff"/>
                  <circle cx="5.5" cy="4.5" r="0.4" fill="#fff"/>
                </svg>
                <span>EN</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-b border-slate-900 bg-slate-950/95 backdrop-blur-lg absolute top-full left-0 w-full z-40 p-4 space-y-1.5 flex flex-col shadow-2xl">
            <button
              onClick={() => handleNavigation('profile')}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 text-xs font-mono ${
                currentPage === 'profile'
                  ? 'bg-brand-green/10 text-brand-green font-semibold'
                  : 'text-slate-300 hover:bg-slate-900/50'
              }`}
            >
              <User className="w-4 h-4 text-brand-green" />
              <span>{t.navProfile}</span>
            </button>

            <button
              onClick={() => handleNavigation('projects')}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 text-xs font-mono ${
                currentPage === 'projects'
                  ? 'bg-brand-green/10 text-brand-green font-semibold'
                  : 'text-slate-300 hover:bg-slate-900/50'
              }`}
            >
              <FolderGit2 className="w-4 h-4 text-brand-green" />
              <span>{t.navProjects}</span>
            </button>

            <button
              onClick={() => handleNavigation('experience')}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 text-xs font-mono ${
                currentPage === 'experience'
                  ? 'bg-brand-green/10 text-brand-green font-semibold'
                  : 'text-slate-300 hover:bg-slate-900/50'
              }`}
            >
              <Briefcase className="w-4 h-4 text-brand-green" />
              <span>{t.navExperience}</span>
            </button>

            <button
              onClick={() => handleNavigation('education')}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 text-xs font-mono ${
                currentPage === 'education'
                  ? 'bg-brand-green/10 text-brand-green font-semibold'
                  : 'text-slate-300 hover:bg-slate-900/50'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-brand-green" />
              <span>{t.navEducation}</span>
            </button>
          </div>
        )}
      </header>

      {/* Main Content Sections with Page Transitions */}
      <main className="flex-grow">
        {currentPage === 'profile' ? (
          <div>
            <Hero language={language} />
            
            {/* Quick Navigation Bento Box */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Promo Card: Second Web (Projects) */}
                <div className="p-6 rounded-2xl bg-slate-900/35 border border-slate-900 hover:border-slate-800/80 transition-all flex flex-col justify-between gap-5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-green/5 to-transparent pointer-events-none" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-brand-green/10 text-brand-green font-mono text-[9px] uppercase tracking-wider font-semibold">2da Web</span>
                    </div>
                    <h4 className="text-base font-bold text-white font-display">{t.bentoProjectsTitle}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{t.bentoProjectsDesc}</p>
                  </div>
                  <button
                    onClick={() => handleNavigation('projects')}
                    className="w-full py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-mono font-bold text-[11px] transition-all flex items-center justify-center gap-2"
                  >
                    <span>{t.bentoProjectsBtn}</span>
                    <FolderGit2 className="w-3.5 h-3.5 text-brand-green" />
                  </button>
                </div>

                {/* Promo Card: Third Web (Experience) */}
                <div className="p-6 rounded-2xl bg-slate-900/35 border border-slate-900 hover:border-slate-800/80 transition-all flex flex-col justify-between gap-5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-blue/5 to-transparent pointer-events-none" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue font-mono text-[9px] uppercase tracking-wider font-semibold">3ra Web</span>
                    </div>
                    <h4 className="text-base font-bold text-white font-display">{t.bentoExperienceTitle}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{t.bentoExperienceDesc}</p>
                  </div>
                  <button
                    onClick={() => handleNavigation('experience')}
                    className="w-full py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-mono font-bold text-[11px] transition-all flex items-center justify-center gap-2"
                  >
                    <span>{t.bentoExperienceBtn}</span>
                    <Briefcase className="w-3.5 h-3.5 text-brand-blue" />
                  </button>
                </div>

                {/* Promo Card: Fourth Web (Education) */}
                <div className="p-6 rounded-2xl bg-slate-900/35 border border-slate-900 hover:border-slate-800/80 transition-all flex flex-col justify-between gap-5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-green/5 to-transparent pointer-events-none" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-brand-green/10 text-brand-green font-mono text-[9px] uppercase tracking-wider font-semibold">4ta Web</span>
                    </div>
                    <h4 className="text-base font-bold text-white font-display">{t.bentoEducationTitle}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{t.bentoEducationDesc}</p>
                  </div>
                  <button
                    onClick={() => handleNavigation('education')}
                    className="w-full py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-mono font-bold text-[11px] transition-all flex items-center justify-center gap-2"
                  >
                    <span>{t.bentoEducationBtn}</span>
                    <GraduationCap className="w-3.5 h-3.5 text-brand-green" />
                  </button>
                </div>

              </div>
            </div>

            <Skills language={language} />
            
            <Projects language={language} />
          </div>
        ) : currentPage === 'projects' ? (
          <DetailedPortfolio language={language} onBackToProfile={() => handleNavigation('profile')} />
        ) : currentPage === 'experience' ? (
          <ExperiencePage language={language} onBackToProfile={() => handleNavigation('profile')} />
        ) : (
          <EducationPage language={language} onBackToProfile={() => handleNavigation('profile')} />
        )}
      </main>

      {/* Contact and Footer */}
      <ContactFooter language={language} />
    </div>
  );
}
