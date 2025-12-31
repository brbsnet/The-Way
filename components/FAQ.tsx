
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categories = ["Flexibilidade e Horários", "Metodologia", "Plataforma e Recursos", "Garantia e Pagamento"];

  return (
    <section id="faq" className="py-32 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-widest mb-6">
            Perguntas Frequentes
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-950 mb-8 font-poppins tracking-tight">
            Tire suas <span className="text-amber-500">dúvidas</span>
          </h2>
          <p className="text-xl text-slate-600">
            Encontre respostas rápidas para as dúvidas mais comuns sobre nosso curso.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, i) => (
            <button 
              key={i}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                i === 0 ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className={`rounded-[2rem] transition-all duration-500 overflow-hidden ${
                activeIndex === i ? 'bg-slate-50 border-2 border-amber-200 shadow-xl' : 'bg-white border-2 border-slate-100'
              }`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full py-8 px-8 flex items-center justify-between gap-6 text-left group"
              >
                <span className={`text-xl font-bold transition-colors font-poppins ${
                  activeIndex === i ? 'text-amber-600' : 'text-slate-900 group-hover:text-amber-500'
                }`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-500 ${
                  activeIndex === i ? 'bg-amber-500 text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-500'
                }`}>
                  <ChevronDown size={24} />
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${
                activeIndex === i ? 'max-h-96 opacity-100 py-0 px-8 pb-8' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <p className="text-lg text-slate-600 leading-relaxed border-t border-slate-200/60 pt-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-slate-500 font-medium">
            Ainda tem dúvidas? <a href="#cta" className="text-amber-600 font-bold hover:underline decoration-2 underline-offset-4">Entre em contato conosco agora.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
