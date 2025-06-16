type Item = {
  peca_tipo: "metal" | "plastico" | "lixo";
  total_separacoes: number;
  time: string;
  time_interval: string;
  date: string;
};

type Grupo = Item[];

type TableRow = {
  material: string;
  unidades: number;
  erros: string;
  horario: string;
  intervalo_tempo: string;
  dia: string;
};

export function generateTableData(
  data: Grupo[],
  tipo: string,
  nomeMaterial: string
): TableRow[] {
  return data
    .map((grupo) => grupo.find((item) => item.peca_tipo === tipo))
    .filter(Boolean)
    .map((item) => ({
      material: nomeMaterial,
      unidades: item!.total_separacoes,
      erros: "",
      horario: item!.time,
      intervalo_tempo: item!.time_interval,
      dia: item!.date,
    })).reverse();
}

