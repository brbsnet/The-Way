
import React from 'react';
import { Sparkles, Check, Clock, ArrowRight, CreditCard, Shield } from 'lucide-react';

const CTA: React.FC = () => {
  const inclusions = [
    "Aulas ao vivo de segunda a quinta",
    "5 horários flexíveis por dia",
    "Acesso às gravações de todas as aulas",
    "Plataforma completa com materiais",
    "Ferramentas Memrise, ChatClass e Gab AI",
    "Suporte dedicado via WhatsApp",
    "Certificado de conclusão reconhecido",
    "Garantia incondicional de 5 aulas"
  ];

  return (
    <section id="cta" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251,191,36,0.2) 1px, transparent 0px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-bold uppercase tracking-widest mb-8 shadow-xl">
            <Sparkles className="w-4 h-4" />
            Comece Sua Jornada Hoje
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-poppins tracking-tight">
            Transforme seu futuro <br /> com o <span className="text-amber-400">inglês</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A fluência em inglês é o passaporte para oportunidades ilimitadas. Invista na sua melhor versão agora mesmo.
          </p>
        </div>

        <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl border border-white/20 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-10 font-poppins">O que você recebe:</h3>
              <div className="grid gap-5">
                {inclusions.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Check className="w-5 h-5 text-emerald-600" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-200 shadow-inner flex flex-col items-center">
              <div className="flex items-center gap-3 mb-10 text-slate-600 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm">
                <Clock className="w-6 h-6 text-amber-500" />
                <span className="text-lg font-bold">Duração: 10 a 12 meses</span>
              </div>
              
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-8 px-10 text-2xl rounded-[2rem] shadow-[0_20px_50px_rgba(245,158,11,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mb-8 group">
                Quero Me Matricular
                <ArrowRight className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </button>

              <div className="flex items-center justify-center gap-3 text-slate-500 text-base font-bold mb-10">
                <CreditCard className="w-6 h-6" />
                <span>Cartão, Boleto ou PIX • Até 12x</span>
              </div>

              <div className="w-full bg-emerald-50 border-2 border-emerald-200/50 rounded-[2rem] p-8 flex items-start gap-5 group">
                <div className="p-3 bg-emerald-100 rounded-2xl group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <p className="font-black text-emerald-800 text-xl mb-1">Garantia de 5 Aulas</p>
                  <p className="text-emerald-700 font-medium">Não se adaptou? Devolvemos 100% do seu investimento. Sem burocracia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-20 opacity-60">
          {['Metodologia Comprovada', 'Flexibilidade Total', 'Garantia de Reembolso'].map((item, i) => (
             <div key={i} className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                {item}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
