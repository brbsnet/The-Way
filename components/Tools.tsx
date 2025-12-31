
import React from 'react';
import { Sparkles, PanelsTopLeft, Brain, Smartphone, MessageCircle, Video } from 'lucide-react';

const Tools: React.FC = () => {
  const tools = [
    {
      title: "Plataforma Teaches",
      desc: "Centraliza todos os conteúdos de maneira eficiente e organizada. Acesso a materiais, exercícios e progresso em um só lugar.",
      icon: <PanelsTopLeft className="text-amber-400" />,
      tag: "Tudo em um só lugar"
    },
    {
      title: "Memrise",
      desc: "Repetição espaçada com exercícios variados para fixação de vocabulário nativo. Nunca mais esqueça o que aprendeu.",
      icon: <Brain className="text-amber-400" />,
      tag: "Memorização permanente"
    },
    {
      title: "Gab English Teacher",
      desc: "Inteligência Artificial para treino de conversação direta pelo WhatsApp. Pratique inglês a qualquer hora do dia ou da noite.",
      icon: <Smartphone className="text-amber-400" />,
      tag: "IA para conversação"
    },
    {
      title: "ChatClass",
      desc: "Treinamento diário simulando conversas reais em cenários variados. Desenvolva fluência com interações práticas.",
      icon: <MessageCircle className="text-amber-400" />,
      tag: "Prática diária"
    },
    {
      title: "Aulas Gravadas",
      desc: "Todas as aulas ao vivo ficam disponíveis para revisão ou reposição imediata em caso de imprevistos do dia a dia.",
      icon: <Video className="text-amber-400" />,
      tag: "Nunca perca conteúdo"
    }
  ];

  return (
    <section id="tools" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-bold uppercase tracking-widest mb-6">
            Ferramentas de Apoio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 font-poppins tracking-tight">
            Tecnologia a favor do seu <span className="text-amber-500">aprendizado</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Recursos exclusivos e integrados para acelerar sua fluência e manter você motivado durante toda a jornada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute -top-3 left-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles size={14} />
                  {tool.tag}
                </span>
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-8 mt-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                {/* Fix: cast icon element to React.ReactElement<any> to allow passing 'size' prop in cloneElement */}
                {React.cloneElement(tool.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">{tool.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {tool.desc}
              </p>
            </div>
          ))}

          {/* All Included Card */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[2.5rem] p-10 flex flex-col justify-center text-center text-white shadow-2xl shadow-amber-500/20 border border-amber-400 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-8 shadow-inner">
              <span className="text-5xl animate-pulse">✨</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 font-poppins">Tudo Incluso</h3>
            <p className="text-amber-50 font-medium text-lg leading-relaxed">
              Todas as ferramentas e acesso às plataformas já estão incluídas no valor do curso. <br />
              <span className="font-black">Sem taxas extras escondidas.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
