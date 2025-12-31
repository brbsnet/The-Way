
import React from 'react';
import { RotateCcw, Brain, Users2, Puzzle, Gamepad2, Laptop } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold uppercase tracking-widest mb-6">
            Metodologia Exclusiva
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 font-poppins tracking-tight">
            O Segredo do <span className="text-amber-500">Inglês Cíclico</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Uma abordagem revolucionária que respeita seu tempo e maximiza sua retenção de conteúdo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Visual Circle Representation */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Spinning rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-4 border-dashed border-amber-300 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute w-[80%] h-[80%] rounded-full border-4 border-dashed border-blue-400 animate-[spin_45s_linear_infinite_reverse]"></div>
                <div className="absolute w-[60%] h-[60%] rounded-full border-4 border-dashed border-purple-400 animate-[spin_30s_linear_infinite]"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-amber-500/40 z-10">
                  <RotateCcw className="w-12 h-12 text-white animate-pulse" />
                </div>
              </div>

              {/* Orbital Nodes */}
              {[0, 90, 180, 270].map((deg, i) => (
                <div 
                  key={i}
                  className="absolute w-6 h-6 rounded-full bg-slate-900 shadow-xl border-2 border-white"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg}deg) translate(200px) rotate(-${deg}deg)`,
                    marginTop: '-12px',
                    marginLeft: '-12px'
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {[
              { num: "01", title: "Entre Quando Quiser", desc: "Não precisa esperar novas turmas. Comece imediatamente em qualquer ponto do ciclo." },
              { num: "02", title: "Aprenda no Seu Ritmo", desc: "Complete a carga horária do nível atual antes de avançar. Sem pressa, sem pressão." },
              { num: "03", title: "Revise Automaticamente", desc: "O modelo cíclico revisita temas importantes em novas camadas, reforçando seu aprendizado." },
              { num: "04", title: "Avance com Confiança", desc: "Só siga em frente quando tiver assimilado todo o conteúdo do módulo através de testes práticos." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl group-hover:bg-amber-500 transition-all duration-500 group-hover:scale-110 shadow-lg">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accelerated Techniques Grid */}
        <div className="bg-white rounded-[3rem] p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Técnicas de Aprendizado Acelerado</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <RotateCcw />, title: "Aula Invertida", desc: "Estude previamente e maximize a prática em aula." },
              { icon: <Users2 />, title: "Instrução por Pares", desc: "Aprenda e ensine, solidificando o conhecimento." },
              { icon: <Brain />, title: "Repetição Espaçada", desc: "Memorize vocabulário de forma permanente." },
              { icon: <Puzzle />, title: "ABP", desc: "Aprendizagem baseada em desafios e problemas reais." },
              { icon: <Gamepad2 />, title: "Gamificação", desc: "Aprendizado envolvente com ranking e recompensas." },
              { icon: <Laptop />, title: "Ensino Híbrido", desc: "Sincronia perfeita entre aulas ao vivo e offline." }
            ].map((tech, i) => (
              <div key={i} className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-amber-300 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                  {/* Fix: cast icon element to React.ReactElement<any> to allow passing 'size' prop in cloneElement */}
                  {React.cloneElement(tech.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{tech.title}</h4>
                  <p className="text-sm text-slate-500">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
