import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, MessageSquare, Check, AlertCircle, RefreshCw, MessageCircle } from 'lucide-react';
import { translations } from '../translations';

export default function ContactFooter({ language }: { language: 'es' | 'en' }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const t = translations[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setStatus('error');
      return;
    }
    
    setStatus('sending');
    
    fetch("https://formsubmit.co/ajax/kleberucr@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formData.nombre,
        email: formData.email,
        company: formData.empresa,
        message: formData.mensaje,
        _subject: `Nuevo mensaje de CV: ${formData.nombre}`,
        _replyto: formData.email
      })
    })
    .then(response => {
      if (response.ok) {
        setStatus('success');
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          mensaje: ''
        });
      } else {
        setStatus('error');
      }
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-24 pb-12 px-4 md:px-8 relative grid-glow">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-blue-glow rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Contact Grid layout (Form + Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Info Side (Col-span 5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-brand-green">{language === 'es' ? 'Contacto' : 'Contact'}</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-white">
                {language === 'es' ? '¿Conversamos sobre ' : 'Let\'s talk about '}<span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">{language === 'es' ? 'Datos y Estrategia' : 'Data and Strategy'}</span>?
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {language === 'es' 
                  ? 'Si estás buscando optimizar tu planeación de demanda, integrar variables macroeconómicas en tu toma de decisiones o desplegar modelos avanzados de IA, hablemos. Estoy abierto a consultorías, colaboraciones de proyectos y nuevos desafíos.'
                  : 'If you are looking to optimize your demand planning, integrate macroeconomic variables into your decision-making, or deploy advanced AI models, let\'s talk. I am open to consulting, project collaborations, and new challenges.'}
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 transition-colors">
                <div className="p-2 rounded bg-brand-blue-glow text-brand-blue border border-brand-blue/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{language === 'es' ? 'Email Corporativo' : 'Corporate Email'}</div>
                  <a href="mailto:kleberucr@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-brand-green transition-colors">
                    {language === 'es' ? 'Enviar Email' : 'Send Email'}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-emerald-950/10 border border-emerald-900/40 hover:border-emerald-500/35 transition-colors">
                <div className="p-2 rounded bg-emerald-950/35 text-emerald-400 border border-emerald-500/20">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-semibold">{language === 'es' ? 'WhatsApp Directo' : 'Direct WhatsApp'}</div>
                  <a 
                    href="https://wa.me/50661428303" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm font-bold text-slate-100 hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    {language === 'es' ? 'Enviar Mensaje' : 'Send Message'}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Connect Badge */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">{language === 'es' ? 'Conecta conmigo en redes' : 'Connect with me on social media'}</span>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/in/klebervillalobos" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-blue/30 hover:bg-slate-900/80 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-green/30 hover:bg-slate-900/80 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side (Col-span 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-slate-900/20 border border-slate-900 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-green" />

              {status === 'success' ? (
                /* Success Slate */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-950/40 border-2 border-brand-green flex items-center justify-center text-brand-green mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-white font-display">{language === 'es' ? '¡Mensaje Enviado con Éxito!' : 'Message Sent Successfully!'}</h4>
                    <p className="text-slate-400 text-sm max-w-md mx-auto">
                      {language === 'es' 
                        ? 'Gracias por contactar. Analizaré tu propuesta desde una perspectiva económica y técnica y te responderé en menos de 24 horas.'
                        : 'Thank you for reaching out. I will analyze your proposal from an economic and technical perspective and reply in less than 24 hours.'}
                    </p>
                  </div>

                  <button
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850 text-xs font-mono transition-all"
                  >
                    {language === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                  </button>
                </motion.div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-brand-blue" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">{language === 'es' ? 'Canal de Contacto Directo' : 'Direct Contact Channel'}</span>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-lg bg-red-950/40 border border-red-800/50 text-red-300 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>
                        {language === 'es' 
                          ? 'Error al enviar el mensaje. Por favor, revisa tus campos o contáctame directamente en kleberucr@gmail.com' 
                          : 'Error sending message. Please check the fields or contact me directly at kleberucr@gmail.com'}
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name field */}
                    <div className="space-y-1.5">
                      <label htmlFor="nombre" className="text-xs font-mono text-slate-400">{language === 'es' ? 'Nombre Completo *' : 'Full Name *'}</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder={language === 'es' ? "Ej. Sofia Silva" : "e.g. Sofia Silva"}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800/80 text-white placeholder-slate-600 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-all"
                      />
                    </div>

                    {/* Email field */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-slate-400">{language === 'es' ? 'Email de Contacto *' : 'Contact Email *'}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={language === 'es' ? "Ej. sofia@empresa.com" : "e.g. sofia@company.com"}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800/80 text-white placeholder-slate-600 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Company field */}
                  <div className="space-y-1.5">
                    <label htmlFor="empresa" className="text-xs font-mono text-slate-400">{language === 'es' ? 'Empresa / Institución (Opcional)' : 'Company / Institution (Optional)'}</label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder={language === 'es' ? "Ej. Logística Global S.A." : "e.g. Global Logistics S.A."}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800/80 text-white placeholder-slate-600 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-all"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="mensaje" className="text-xs font-mono text-slate-400">{language === 'es' ? 'Propuesta / Mensaje *' : 'Proposal / Message *'}</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder={language === 'es' ? "Cuéntame sobre tu proyecto, volúmenes de datos, o desafíos de demanda..." : "Tell me about your project, data volumes, or demand challenges..."}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800/80 text-white placeholder-slate-600 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-brand-blue to-brand-green hover:opacity-90 text-white font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-blue/10 transition-all duration-300 disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>{language === 'es' ? 'Analizando datos & procesando envío...' : 'Analyzing data & processing sending...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{language === 'es' ? 'Enviar Mensaje de Negocio' : 'Send Business Message'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Brand/Signature bottom bar */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left text-xs font-mono text-slate-500">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span>Senior Data Analyst Portfolio | {new Date().getFullYear()}</span>
          </div>
          <div className="text-slate-600">
            {language === 'es' ? 'Diseñado con rigor analítico y precisión económica.' : 'Designed with analytical rigor and economic precision.'}
          </div>
        </div>

      </div>
    </footer>
  );
}
