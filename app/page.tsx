import React from 'react';
import { Brain, Zap, Target, Mail, ArrowRight, ShieldCheck, Clock, LineChart, Check } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-[#020617] text-slate-300 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden min-h-screen">
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-violet-600/10 rounded-full blur-[120px] animate-pulse delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-sky-600 to-violet-600 rounded-xl shadow-lg">
                <Brain className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Synapse IA</span>
            </div>
            <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5">
              <a href="#solutions" className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all">Solutions</a>
              <a href="#approche" className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all">Approche</a>
              <a href="#contact" className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all">Contact</a>
            </div>
            <div className="hidden md:block">
              <a href="#contact" className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-sky-600 rounded-full hover:bg-sky-500 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Audit Gratuit <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Spécialistes IA pour Lévis & Québec
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Propulsez votre <br className="hidden md:block" /> PME avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">l'IA Locale.</span>
              </h1>
              <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Synapse IA transforme vos opérations. Gagnez du temps, réduisez vos coûts et libérez votre équipe des tâches répétitives grâce à l'automatisation intelligente.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-600 to-violet-600 text-white font-bold rounded-xl shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  Lancer l'audit <Zap className="w-5 h-5" />
                </a>
                <a href="#solutions" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm">
                  Voir les solutions
                </a>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/5 pt-8">
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Québec</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <div className="text-3xl font-bold text-white">3x</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">ROI Moyen</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Support</div>
                </div>
              </div>
            </div>

            {/* Visual Element Placeholder */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-gradient-to-br from-sky-500/10 to-violet-500/10 rounded-full blur-3xl absolute inset-0"></div>
              <div className="relative z-10 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                 <div className="flex justify-between items-end mb-8">
                    <div>
                      <div className="text-xs text-sky-300 font-semibold mb-1">Efficacité Opérationnelle</div>
                      <div className="text-4xl font-bold text-white">+240%</div>
                    </div>
                    <div className="text-green-400 bg-green-500/10 px-2 py-1 rounded text-xs font-bold">+12.5%</div>
                 </div>
                 <div className="flex items-end gap-3 h-32">
                    <div className="flex-1 bg-sky-500/20 rounded-t h-[40%]"></div>
                    <div className="flex-1 bg-sky-500/40 rounded-t h-[60%]"></div>
                    <div className="flex-1 bg-sky-500/60 rounded-t h-[50%]"></div>
                    <div className="flex-1 bg-sky-500/80 rounded-t h-[80%]"></div>
                    <div className="flex-1 bg-sky-400 rounded-t h-[100%] shadow-[0_0_20px_rgba(56,189,248,0.3)]"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 relative z-10 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sky-400 font-bold tracking-wide uppercase text-sm mb-3">Nos Services</h2>
            <p className="text-3xl md:text-5xl font-bold text-white mb-6">Solutions Intelligentes.</p>
            <p className="text-lg text-slate-400">Nous ne vendons pas de la "hype". Nous construisons des systèmes qui résolvent vos problèmes d'affaires.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-800/50 border border-white/5 p-8 hover:border-sky-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Automatisation de Flux</h3>
              <p className="text-slate-400 max-w-md">Éliminez les tâches répétitives. De la saisie de données à la facturation, nos scripts travaillent pour vous 24/7.</p>
              <div className="flex items-center gap-4 mt-8">
                <span className="px-3 py-1 rounded-full bg-slate-700/50 text-xs text-slate-300">Python</span>
                <span className="px-3 py-1 rounded-full bg-slate-700/50 text-xs text-slate-300">n8n</span>
                <span className="px-3 py-1 rounded-full bg-slate-700/50 text-xs text-slate-300">API</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-slate-800/50 border border-white/5 p-8 hover:border-violet-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Analyse de Données</h3>
              <p className="text-slate-400 text-sm">Prédisez vos ventes et optimisez vos stocks avec la puissance de vos données historiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="approche" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pourquoi choisir Synapse ?</h2>
              <p className="text-slate-400 text-lg mb-8">Contrairement aux agences internationales, nous comprenons le marché de Québec. Nous savons que les PME d'ici ont besoin de solutions simples.</p>
              <ul className="space-y-6">
                {[
                  { title: 'Approche Pragmatique', desc: 'Pas de buzzwords inutiles. On parle votre langage.' },
                  { title: 'Développement Rapide', desc: 'Premiers résultats visibles en moins de 2 semaines.' },
                  { title: 'Sécurité des Données', desc: 'Vos données restent sécurisées et confidentielles.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mt-1">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-slate-400">Agence Traditionnelle</span>
                  <span className="text-slate-500 text-sm">Coûteux & Lent</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="text-slate-400">SaaS Génériques</span>
                  <span className="text-slate-500 text-sm">Complexe & Peu adapté</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-sky-500/10 rounded-xl border border-sky-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-white font-bold">Synapse IA</span>
                  </div>
                  <span className="text-sky-400 text-sm font-bold">Sur mesure & Abordable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Parlons de votre projet.</h2>
                <p className="text-slate-400 mb-8">Remplissez le formulaire pour obtenir votre audit gratuit. Nous analysons vos processus et identifions les opportunités d'automatisation.</p>
                <div className="flex items-center gap-4 text-sm text-slate-300">
                   <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-sky-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">JT</div>
                      <div className="w-8 h-8 rounded-full bg-violet-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">ML</div>
                   </div>
                   <p>Réponse garantie sous 24h.</p>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Nom</label>
                    <input type="text" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-sky-500 transition-all outline-none" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Entreprise</label>
                    <input type="text" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-sky-500 transition-all outline-none" placeholder="Nom de PME" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Courriel Pro</label>
                  <input type="email" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-sky-500 transition-all outline-none" placeholder="vous@entreprise.ca" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Défi principal</label>
                  <textarea rows={3} className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-sky-500 transition-all outline-none resize-none" placeholder="Ex: Trop de saisie manuelle..."></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all shadow-lg">
                  Demander mon audit gratuit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020617] relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-tr from-sky-600 to-violet-600 rounded-lg flex items-center justify-center">
                  <Brain className="text-white w-4 h-4" />
                </div>
                <span className="font-bold text-white text-lg">Synapse IA</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                L'intelligence artificielle accessible et efficace pour les entreprises de Québec et Lévis.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Automatisation</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Analyse de données</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Consultation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Entreprise</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-sky-400 transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-500" /> info@synapseia.ca
                </li>
                <li className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-sky-500" /> Lévis, QC
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-sm text-slate-500">
            <p>© 2026 Synapse IA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
