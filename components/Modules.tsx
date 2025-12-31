
import React, { useState } from 'react';
import { Mic, Building2, BookText, MessageSquare, Check, ChevronRight } from 'lucide-react';
import { MODULES } from '../constants';

const iconMap: any = { mic: Mic, building: Building2, book: BookText, message: MessageSquare };

const Modules: React.FC = () => {
  const [activeModule, setActiveModule] = useState(MODULES[0]);

  return (
    <section id="modules" className="py-32 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-widest mb-6">
            Conteúdo Programático
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-950 mb-8 font-poppins tracking-tight">
            Do básico ao avançado em <span className="text-amber-500">4 módulos</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Uma jornada completa de desenvolvimento que abrange todas as habilidades essenciais do idioma.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Module Selector */}
          <div className="space-y-5">
            {MODULES.map((module) => {
              const Icon = iconMap[module.icon];
              const isActive = activeModule.id === module.id;
              
              return (
                <button 
                  key={module.id}
                  onClick={() => setActiveModule(module)}
                  className={`w-full text-left p-6 rounded-3xl border-2 transition-all duration-500 flex items-center gap-6 group ${
                    isActive 
                      ? 'bg-blue-50 border-blue-500 shadow-xl shadow-blue-100 scale-[1.02]' 
                      : 'bg-slate-50 border-transparent hover:border-slate-300'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    isActive ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-200 text-slate-500'
                  }`}>
                    <Icon size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h4 className="text-2xl font-bold text-slate-900 font-poppins">{module.name}</h4>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                        isActive ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {module.focus}
                      </span>
                    </div>
                    <p className={`mt-2 transition-colors duration-500 ${isActive ? 'text-slate-700' : 'text-slate-500'}`}>
                      {module.description}
                    </p>
                  </div>
                  <ChevronRight size={24} className={`transition-transform duration-500 ${
                    isActive ? 'text-blue-600 translate-x-1' : 'text-slate-300'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Module Details */}
          <div className="sticky top-32">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-10 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10 -rotate-12 pointer-events-none">
                {React.createElement(iconMap[activeModule.icon], { size: 180 })}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                    {React.createElement(iconMap[activeModule.icon], { size: 40 })}
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold font-poppins">{activeModule.name}</h3>
                    <p className="text-blue-100 text-lg font-medium">{activeModule.focus}</p>
                  </div>
                </div>

                <p className="text-xl text-blue-50/80 mb-10 leading-relaxed font-medium">
                  {activeModule.description}. Neste estágio, focamos na construção de uma base sólida para sua comunicação.
                </p>

                <div className="space-y-6">
                  <h4 className="text-xl font-bold uppercase tracking-widest text-blue-200">O que você vai aprender:</h4>
                  <div className="grid gap-4">
                    {activeModule.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 group hover:bg-white/20 transition-all duration-300">
                        <div className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Check className="w-5 h-5 text-emerald-950" strokeWidth={3} />
                        </div>
                        <span className="text-lg font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
