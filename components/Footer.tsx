
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-3 font-poppins">
              <span className="text-amber-400">Lexis</span> English Academy
            </h3>
            <p className="text-slate-500 text-lg font-medium">
              The Way - Curso de Inglês Cíclico Inovador
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-base font-bold uppercase tracking-widest">
            {['Benefícios', 'Metodologia', 'Módulos', 'FAQ'].map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="text-slate-500 text-sm text-center md:text-right leading-relaxed font-medium">
            © {currentYear} Lexis English Academy <br />
            <span className="opacity-60">Todos os direitos reservados • CNPJ 00.000.000/0001-00</span>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-center">
            <p className="text-slate-600 text-xs tracking-[0.3em] font-black uppercase">
                Aprenda. Pratique. Fluência.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
