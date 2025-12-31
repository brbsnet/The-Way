
import React from 'react';
import { Sun, Coffee, Sunset, Moon, Star, Check, Calendar } from 'lucide-react';
import { SCHEDULE } from '../constants';

const iconMap: any = { sun: Sun, coffee: Coffee, sunset: Sunset, moon: Moon, star: Star };

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold uppercase tracking-widest mb-6">
            Flexibilidade Total
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-poppins tracking-tight">
            Escolha o horário que <span className="text-amber-400">combina com você</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A mesma aula é oferecida em 5 horários diferentes todos os dias. Alterne entre eles livremente conforme sua necessidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {SCHEDULE.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-amber-500/50 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-xl`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{item.time}</h3>
                <p className="text-amber-400 font-semibold text-sm mb-3 uppercase tracking-wider">{item.label}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 pointer-events-none">
            <Calendar size={200} className="text-white" />
          </div>
          
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-2xl bg-amber-500/20">
              <Calendar className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-3xl font-bold text-white font-poppins">Aulas de Segunda a Quinta</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {['Segunda', 'Terça', 'Quarta', 'Quinta'].map((day) => (
              <div key={day} className="space-y-6">
                <p className="text-amber-400 font-bold text-xl pb-4 border-b border-white/10">{day}</p>
                <div className="space-y-3">
                  {SCHEDULE.map(s => (
                    <div key={s.time} className="flex items-center gap-3 py-3 px-5 rounded-2xl bg-white/5 text-slate-300 hover:bg-white/10 transition-colors group">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="font-medium group-hover:text-white transition-colors">{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-16 text-sm font-medium">
            * Todas as aulas são 100% ao vivo com professor e ficam gravadas para revisão vitalícia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
