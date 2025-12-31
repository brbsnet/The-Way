
export interface Module {
  id: string;
  name: string;
  focus: string;
  description: string;
  icon: string;
  topics: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ScheduleItem {
  time: string;
  label: string;
  description: string;
  icon: string;
  gradient: string;
}
