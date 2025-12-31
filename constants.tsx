
import React from 'react';
import { 
  Clock, 
  Repeat, 
  Users, 
  Award, 
  Video, 
  BookOpen, 
  Headphones, 
  Shield, 
  Mic, 
  Building2, 
  BookText, 
  MessageSquare,
  Sparkles,
  Smartphone,
  MessageCircle,
  Sun,
  Coffee,
  Sunset,
  Moon,
  Star
} from 'lucide-react';
import { Module, Benefit, FAQItem, ScheduleItem } from './types';

export const BENEFITS: Benefit[] = [
  {
    title: "5 Horários por Dia",
    description: "Escolha entre 07h, 12h, 18h, 20h ou 21h. Sua rotina define seu horário de estudo.",
    icon: 'clock',
    gradient: "from-amber-500 to-orange-500"
  },
  {
    title: "Modelo Cíclico",
    description: "Entre a qualquer momento. Avance apenas quando estiver pronto, sem perder conteúdo.",
    icon: 'repeat',
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Aulas ao Vivo + Gravadas",
    description: "Interação real com professores. Perdeu uma aula? Assista a gravação quando quiser.",
    icon: 'video',
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Fluência em 10-12 Meses",
    description: "Do básico ao avançado com metodologia comprovada e acompanhamento constante.",
    icon: 'target',
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Material Completo Incluso",
    description: "Plataforma com todo conteúdo organizado, exercícios interativos e recursos extras.",
    icon: 'book',
    gradient: "from-red-500 to-rose-500"
  },
  {
    title: "Suporte Dedicado",
    description: "Equipe pronta para tirar dúvidas sobre conteúdo, plataforma e questões técnicas.",
    icon: 'headphones',
    gradient: "from-indigo-500 to-violet-500"
  },
  {
    title: "Turmas Interativas",
    description: "Aprenda com colegas, pratique conversação e construa networking internacional.",
    icon: 'users',
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Garantia Total",
    description: "Não se adaptou nas 5 primeiras aulas? Devolvemos 100% do valor investido.",
    icon: 'shield',
    gradient: "from-amber-500 to-yellow-500"
  }
];

export const MODULES: Module[] = [
  {
    id: "start",
    name: "Start",
    focus: "Fonética",
    description: "Correção de vícios fonéticos e introdução a phrasal verbs",
    icon: "mic",
    topics: [
      "Pronúncia correta dos sons do inglês",
      "Correção de sotaque brasileiro",
      "Introdução aos phrasal verbs mais usados",
      "Entonação e ritmo da fala",
      "Listening básico para compreensão"
    ]
  },
  {
    id: "run",
    name: "Run",
    focus: "Estruturas",
    description: "Domínio intensivo de estruturas gramaticais simples e complexas",
    icon: "building",
    topics: [
      "Estruturas gramaticais essenciais",
      "Tempos verbais complexos",
      "Construção de frases avançadas",
      "Leitura técnica intermediária",
      "Redação e e-mails profissionais"
    ]
  },
  {
    id: "fly",
    name: "Fly",
    focus: "Vocabulário",
    description: "Expansão de vocabulário com foco nas 600-700 palavras mais usadas",
    icon: "book",
    topics: [
      "Business English vocabulário",
      "Expressões idiomáticas nativas",
      "Sinônimos e antônimos de alto nível",
      "Vocabulário para viagens e reuniões",
      "Expansão léxica acelerada"
    ]
  },
  {
    id: "liberty",
    name: "Liberty",
    focus: "Conversação",
    description: "Desenvolvimento da fluência e compreensão auditiva acima de 70%",
    icon: "message",
    topics: [
      "Debates e argumentação",
      "Apresentações em inglês",
      "Socialização com nativos",
      "Gírias e inglês das ruas",
      "Compreensão de sotaques diversos"
    ]
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { time: "07h", label: "Manhã", description: "Para quem acorda cedo", icon: 'sun', gradient: "from-orange-400 to-amber-500" },
  { time: "12h", label: "Almoço", description: "Hora do almoço produtivo", icon: 'coffee', gradient: "from-amber-400 to-yellow-500" },
  { time: "18h", label: "Tarde", description: "Após o trabalho", icon: 'sunset', gradient: "from-rose-400 to-orange-500" },
  { time: "20h", label: "Noite", description: "Início da noite", icon: 'moon', gradient: "from-purple-400 to-indigo-500" },
  { time: "21h", label: "Noite", description: "Horário popular", icon: 'star', gradient: "from-indigo-400 to-blue-500" }
];

export const FAQS: FAQItem[] = [
  {
    question: "Posso alternar entre os diferentes horários das aulas ao vivo?",
    answer: "Sim! Essa é a nossa grande vantagem. Você pode assistir a aula de manhã em um dia e à noite no outro, sem precisar avisar. A aula é a mesma em todos os horários do dia."
  },
  {
    question: "O que acontece se eu perder uma aula ao vivo?",
    answer: "Não tem problema. Todas as aulas são gravadas e ficam disponíveis na nossa plataforma Teaches para você assistir quando puder."
  },
  {
    question: "O curso é focado em gramática?",
    answer: "Nossa metodologia é cíclica e comunicativa. A gramática é ensinada de forma orgânica dentro de contextos reais de conversação e uso diário."
  },
  {
    question: "Quanto tempo demora para chegar à fluência?",
    answer: "Seguindo nosso cronograma e utilizando as ferramentas de apoio, a maioria dos alunos atinge a fluência funcional entre 10 e 12 meses."
  }
];
