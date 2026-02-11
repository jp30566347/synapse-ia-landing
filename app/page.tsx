import React from 'react';
import { Brain, Zap, Target, Mail } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-blue-900 flex items-center gap-2">
          <Brain className="w-8 h-8" />
          Synapse IA
        </div>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#about" className="hover:text-blue-600 transition">À Propos</a>
          <a href="#contact" className="bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-20 max-w-6xl mx-auto text-center md:text-left md:flex items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Optimisez votre entreprise avec <span className="text-blue-700">l'IA locale.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Synapse IA aide les entreprises de Lévis et Québec à automatiser leurs processus répétitifs pour se concentrer sur l'essentiel : leurs clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-blue-900 text-white text-center px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition shadow-lg">
              Commencez votre audit gratuit
            </a>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 bg-blue-100 rounded-3xl p-12 aspect-square flex items-center justify-center">
          <Zap className="w-48 h-48 text-blue-900 opacity-20" />
        </div>
      </header>

      {/* Features/Services */}
      <section id="services" className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Des solutions concrètes pour les PME</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <Zap className="w-12 h-12 text-blue-700 mb-6" />
              <h3 className="text-xl font-bold mb-4">Automatisation de Flux</h3>
              <p className="text-slate-600">Réduisez le temps passé sur les tâches manuelles et éliminez les erreurs humaines dans vos opérations quotidiennes.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <Target className="w-12 h-12 text-blue-700 mb-6" />
              <h3 className="text-xl font-bold mb-4">Analyse de Données</h3>
              <p className="text-slate-600">Transformez vos données de vente et d'inventaire en décisions stratégiques éclairées pour maximiser votre ROI.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <Brain className="w-12 h-12 text-blue-700 mb-6" />
              <h3 className="text-xl font-bold mb-4">Consultation IA</h3>
              <p className="text-slate-600">Un accompagnement personnalisé pour intégrer l'intelligence artificielle sans perturber votre culture d'entreprise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Lead Capture */}
      <section id="contact" className="py-24 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Prêt à passer à l'étape suivante ?</h2>
          <p className="text-xl text-blue-100 mb-12">Laissez-nous vos coordonnées et nous vous contacterons pour un audit de processus gratuit.</p>
          
          <form className="bg-white p-8 rounded-2xl shadow-2xl text-slate-900 text-left">
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Nom Complet</label>
              <input type="text" className="w-full p-3 rounded border border-slate-200 focus:outline-blue-900" placeholder="Jean Tremblay" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Courriel Professionnel</label>
              <input type="email" className="w-full p-3 rounded border border-slate-200 focus:outline-blue-900" placeholder="jean@entreprise.ca" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Votre plus grand défi actuel</label>
              <textarea className="w-full p-3 rounded border border-slate-200 focus:outline-blue-900" rows={3} placeholder="Saisie manuelle, gestion d'inventaire, etc."></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-700 text-white font-bold py-4 rounded hover:bg-blue-600 transition">
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 px-6 text-center text-slate-500 max-w-6xl mx-auto border-t border-slate-200">
        <p>© 2026 Synapse IA — Lévis, Québec. <br className="md:hidden" /> Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
