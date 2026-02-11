import React from 'react';

export default function LandingPage() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-accent-600/20 rounded-full blur-[120px] animate-blob [animation-delay:2000ms]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-600/20 rounded-full blur-[100px] animate-blob [animation-delay:4000ms]" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* Nav */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-brand-600 to-accent-600 rounded-xl shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                </svg>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">Synapse IA</span>
            </div>
            <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5">
              <a href="#solutions" className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all">Solutions</a>
              <a href="#approche" className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all">Approche</a>
              <a href="#approche" className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all">À propos</a>
            </div>
            <div className="hidden md:block">
              <a href="#contact" className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Audit Gratuit
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
            <div className="md:hidden">
              <button type="button" className="p-2 text-slate-300 hover:text-white" aria-label="Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-center lg:text-left relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8 animate-fade-in-up hover:bg-brand-500/20 transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                </span>
                Spécialistes IA pour Lévis & Québec
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                Propulsez votre <br className="hidden md:block" />
                PME avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-400 to-brand-400 animate-shimmer bg-[length:200%_auto]">l&apos;IA Locale.</span>
              </h1>
              <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Synapse IA transforme vos opérations. Gagnez du temps, réduisez vos coûts et libérez votre équipe des tâches répétitives grâce à l&apos;automatisation intelligente.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 text-white font-bold rounded-xl shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  Lancer l&apos;audit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </a>
                <a href="#solutions" className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  Voir les solutions
                </a>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/5 pt-8">
                <div>
                  <div className="text-3xl font-heading font-bold text-white">100%</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Québec</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-3xl font-heading font-bold text-white">3x</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">ROI Moyen</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-3xl font-heading font-bold text-white">24/7</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Support</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block perspective-1000">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-accent-500/20 rounded-full blur-3xl" />
                <div className="absolute top-10 right-0 glass-card p-5 rounded-2xl w-64 transform rotate-6 z-20 animate-float-delayed">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">Succès</div>
                      <div className="text-xs text-slate-400">Facturation Auto</div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-full animate-pulse" />
                  </div>
                </div>
                <div className="absolute bottom-20 -left-4 glass-card p-6 rounded-2xl w-72 transform -rotate-3 z-30 shadow-2xl shadow-brand-900/50">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <div className="text-xs text-brand-300 font-semibold mb-1">Efficacité Opérationnelle</div>
                      <div className="text-4xl font-heading font-bold text-white">+240%</div>
                    </div>
                    <div className="text-green-400 bg-green-500/10 px-2 py-1 rounded text-xs font-bold">+12.5%</div>
                  </div>
                  <div className="flex items-end gap-2 h-16">
                    <div className="w-1/5 bg-brand-500/20 rounded-t h-[40%]" />
                    <div className="w-1/5 bg-brand-500/40 rounded-t h-[60%]" />
                    <div className="w-1/5 bg-brand-500/60 rounded-t h-[50%]" />
                    <div className="w-1/5 bg-brand-500/80 rounded-t h-[80%]" />
                    <div className="w-1/5 bg-brand-400 rounded-t h-[100%] relative group">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Nov</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 m-auto w-48 h-48 bg-slate-900 rounded-full border border-white/10 flex items-center justify-center z-10 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                  <div className="w-32 h-32 bg-gradient-to-br from-brand-600 to-accent-600 rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                </div>
                <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-20" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" fill="none" />
                  <circle cx="50" cy="2" r="2" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24 relative z-10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-400 font-bold tracking-wide uppercase text-sm mb-3">Nos Services</h2>
            <p className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Solutions Intelligentes.</p>
            <p className="text-lg text-slate-400">Nous ne vendons pas de la &quot;hype&quot;. Nous construisons des systèmes qui résolvent vos problèmes d&apos;affaires.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-800/50 border border-white/5 hover:border-brand-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute right-0 top-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-500/20 transition-all" />
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Automatisation de Flux</h3>
                  <p className="text-slate-400 max-w-md">Éliminez les tâches répétitives. De la saisie de données à la facturation, nos scripts travaillent pour vous 24/7.</p>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <span className="px-3 py-1 rounded-full bg-slate-700/50 text-xs text-slate-300 border border-white/5">Python</span>
                  <span className="px-3 py-1 rounded-full bg-slate-700/50 text-xs text-slate-300 border border-white/5">n8n</span>
                  <span className="px-3 py-1 rounded-full bg-slate-700/50 text-xs text-slate-300 border border-white/5">API</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-slate-800/50 border border-white/5 hover:border-accent-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 text-accent-400 flex items-center justify-center mb-6 group-hover:bg-accent-500 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Analyse de Données</h3>
                  <p className="text-slate-400 text-sm">Prédisez vos ventes et optimisez vos stocks avec la puissance de vos données historiques.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-slate-800/50 border border-white/5 hover:border-pink-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Consultation</h3>
                  <p className="text-slate-400 text-sm">Formation d&apos;équipe et intégration stratégique de l&apos;IA dans vos processus d&apos;affaires.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 to-accent-700 p-8 flex items-center justify-between shadow-lg shadow-brand-900/40">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative z-10 max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-2">Résultats Garantis</h3>
                <p className="text-brand-100">Nous ne sommes satisfaits que lorsque vous voyez un retour sur investissement concret. Transparence totale.</p>
              </div>
              <div className="relative z-10 hidden sm:block">
                <div className="text-4xl font-heading font-extrabold text-white">100%</div>
                <div className="text-sm text-brand-200">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Synapse */}
      <section id="approche" className="py-24 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pourquoi choisir Synapse ?</h2>
              <p className="text-slate-400 text-lg mb-8">Contrairement aux agences internationales, nous comprenons le marché de Québec. Nous savons que les PME d&apos;ici ont besoin de solutions simples.</p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-white">Approche Pragmatique</h4>
                    <p className="text-slate-500">Pas de buzzwords inutiles. On parle votre langage.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-white">Développement Rapide</h4>
                    <p className="text-slate-500">Premiers résultats visibles en moins de 2 semaines.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-white">Sécurité des Données</h4>
                    <p className="text-slate-500">Vos données restent sécurisées et confidentielles.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-600 rounded-2xl blur-lg opacity-40 transform rotate-2" />
              <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span className="text-slate-400">Agence Traditionnelle</span>
                    <span className="text-slate-500 text-sm">Coûteux & Lent</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span className="text-slate-400">Logiciels SaaS Génériques</span>
                    <span className="text-slate-500 text-sm">Complexe & Peu adapté</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-brand-500/10 rounded-xl border border-brand-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-white font-bold">Synapse IA</span>
                    </div>
                    <span className="text-brand-400 text-sm font-bold">Sur mesure & Abordable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-600/20 rounded-full blur-3xl -ml-20 -mb-20" />
            <div className="bg-slate-900/90 rounded-[20px] p-8 md:p-12 relative z-10 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Parlons de votre projet.</h2>
                <p className="text-slate-400 mb-8">Remplissez le formulaire pour obtenir votre audit gratuit. Nous analysons vos processus et identifions les opportunités d&apos;automatisation.</p>
                <div className="flex items-center gap-4 text-sm text-slate-300">
                  <div className="flex -space-x-2">
                    <img src="https://ui-avatars.com/api/?name=Jean&background=0ea5e9&color=fff" className="w-8 h-8 rounded-full border-2 border-slate-900" alt="Avatar" />
                    <img src="https://ui-avatars.com/api/?name=Marie&background=8b5cf6&color=fff" className="w-8 h-8 rounded-full border-2 border-slate-900" alt="Avatar" />
                  </div>
                  <p>Réponse garantie sous 24h.</p>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="nom" className="text-xs font-bold text-slate-500 uppercase">Nom</label>
                    <input type="text" id="nom" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder-slate-600" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="entreprise" className="text-xs font-bold text-slate-500 uppercase">Entreprise</label>
                    <input type="text" id="entreprise" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder-slate-600" placeholder="Nom de PME" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase">Courriel Pro</label>
                  <input type="email" id="email" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder-slate-600" placeholder="vous@entreprise.ca" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase">Défi principal</label>
                  <textarea id="message" rows={3} className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder-slate-600 resize-none" placeholder="Ex: Trop de saisie manuelle..." />
                </div>
                <button type="button" className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all shadow-lg hover:-translate-y-1">
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
                <div className="w-8 h-8 bg-gradient-to-tr from-brand-600 to-accent-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                  </svg>
                </div>
                <span className="font-heading font-bold text-white text-lg">Synapse IA</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                L&apos;intelligence artificielle accessible et efficace pour les entreprises de Québec et Lévis.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#solutions" className="hover:text-brand-400 transition-colors">Automatisation</a></li>
                <li><a href="#solutions" className="hover:text-brand-400 transition-colors">Analyse de données</a></li>
                <li><a href="#solutions" className="hover:text-brand-400 transition-colors">Consultation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Entreprise</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#approche" className="hover:text-brand-400 transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Carrières</a></li>
                <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@synapse-ia.ca
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Lévis, QC
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2024 Synapse IA. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Termes</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
