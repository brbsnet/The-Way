
import React from 'react';
import { 
  Clock, Repeat, Video, Target, BookOpen, Headphones, Users, Shield, 
  LucideIcon 
} from 'lucide-react';
import { BENEFITS } from '../constants';

const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  repeat: Repeat,
  video: Video,
  target: Target,
  book: BookOpen,
  headphones: Headphones,
  users: Users,
  shield: Shield
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-32 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-widest mb-6">
            Por que escolher Lexis
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-950 mb-8 font-poppins tracking-tight">
            Tudo que você precisa para <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              alcançar a fluência
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Uma experiência de aprendizado completa, flexível e focada nos seus resultados individuais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, i) => {
            const IconComp = iconMap[benefit.icon] || Shield;
            return (
              <div 
                key={i} 
                className="group relative bg-slate-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 border border-slate-200/60 overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <IconComp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-poppins">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
                
                {/* Decorative blob on hover */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
