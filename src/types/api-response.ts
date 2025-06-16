

export interface SeparacaoItem {
  peca_tipo: "metal" | "plastico" | "lixo";
  time_interval: string; // ex: "2025-05-30 20:15:00"
  date: string;          // ex: "2025-05-30"
  time: string;          // ex: "20:15:00"
  total_separacoes: number;
}

export type AgrupamentoPorHorario = SeparacaoItem[];

export type ListaAgrupada = AgrupamentoPorHorario[];

