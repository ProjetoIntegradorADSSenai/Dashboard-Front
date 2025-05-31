

export interface SeparacaoItem {
  peca_tipo: "metal" | "plastico";
  time_interval: string; // ex: "2025-05-30 20:15:00"
  date: string;          // ex: "2025-05-30"
  time: string;          // ex: "20:15:00"
  total_separacoes: number;
  avg_duration_seconds: string; // pode ser convertido para number se preferir
  min_duration: number;
  max_duration: number;
}

export type AgrupamentoPorHorario = SeparacaoItem[];

export type ListaAgrupada = AgrupamentoPorHorario[];

