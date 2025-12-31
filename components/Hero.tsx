
import React from 'react';
import { Repeat, Clock, Users, Award, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8 animate-fade-in">
          <Repeat className="w-4 h-4 text-amber-400" />
          <span className="text-amber-300 text-sm font-semibold tracking-wide uppercase">Metodologia Cíclica Exclusiva</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight font-poppins">
          <span className="block">Seu Caminho para a</span>
          <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
            Fluência em Inglês
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Aprenda inglês de forma flexível, com aulas ao vivo em 5 horários diferentes. 
          Comece quando quiser, avance no seu ritmo e nunca fique para trás.
        </p>

        {/* Stats/Quick Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
          {[
            { icon: <Clock className="w-6 h-6 text-amber-400" />, label: "5 opções/dia", sub: "Horários Flexíveis" },
            { icon: <Users className="w-6 h-6 text-amber-400" />, label: "100% Online", sub: "Aulas ao Vivo" },
            { icon: <Repeat className="w-6 h-6 text-amber-400" />, label: "Entre quando quiser", sub: "Modelo Cíclico" },
            { icon: <Award className="w-6 h-6 text-amber-400" />, label: "10-12 meses", sub: "Fluência em" },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 hover:scale-105 duration-300">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <p className="text-white font-bold text-base md:text-lg">{item.label}</p>
              <p className="text-slate-400 text-xs md:text-sm">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-10 py-5 text-xl rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all hover:scale-105 active:scale-95">
            Quero Começar Agora
          </button>
          <button className="w-full sm:w-auto border border-white/20 text-white hover:bg-white/10 px-10 py-5 text-xl rounded-2xl transition-all">
            Conhecer o Método
          </button>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-12">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
            <span className="text-emerald-300 text-sm font-medium">Garantia de 5 aulas: Se não gostar, devolvemos 100% do valor</span>
          </div>
          <a href="#benefits" className="animate-bounce text-slate-500 hover:text-amber-400 transition-colors cursor-pointer">
            <ChevronDown size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
