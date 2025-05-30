import { ApiData } from "@/types/api-response";

export function transformChartData(rawData: ApiData[]) {
  const grouped = rawData.reduce((acc, curr) => {
    const key = curr.time;

    if (!acc[key]) {
      acc[key] = {
        horario: curr.time,
        metalico: 0,
        plastico: 0,
        tempo_medio: 0,
        erros: 0,
        count: 0, // para média ponderada
      };
    }

    if (curr.peca_tipo === "metal") {
      acc[key].metalico = curr.total_separacoes;
    } else if (curr.peca_tipo === "plastico") {
      acc[key].plastico = curr.total_separacoes;
    }

    acc[key].tempo_medio += curr.avg_duration_seconds;
    acc[key].count += 1;

    return acc;
  }, {} as Record<string, any>);

  // Finaliza a média
  return Object.values(grouped).map(item => ({
    horario: item.horario,
    metalico: item.metalico,
    plastico: item.plastico,
    tempo_medio: Math.round(item.tempo_medio / item.count),
    erros: item.erros,
  }));
}
