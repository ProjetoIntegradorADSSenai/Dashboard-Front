import PrincipalChart from "@/components/principalChart";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApiData } from "@/types/api-response";
import { getServerSession } from "next-auth";
import { get } from "http";
import { getMaterials } from "@/services/Get-Materials";
import { transform } from "next/dist/build/swc/generated-native";
import { transformChartData } from "@/utils/transform-chart-data";

// Tipos de materiais fixos que temos
const MATERIALS = {
  METALICOS: "Metálicos",
  PLASTICOS: "Plásticos"
} as const;

const fakeData: ApiData[]= [];

const start = new Date("2023-10-01T21:30:00");
const totalSteps = 24; // total de pares (48 objetos no total)

for (let i = 0; i < totalSteps; i++) {
  const currentTime = new Date(start.getTime() + i * 5 * 60000); // incremento de 5 min
  const time_interval = currentTime.toISOString().replace("T", " ").slice(0, 19);
  const date = time_interval.slice(0, 10);
  const time = time_interval.slice(11);

  // METAL
  fakeData.push({
    peca_tipo: "metal",
    time_interval,
    date,
    time,
    total_separacoes: Math.floor(Math.random() * 50 + 50), // 50 a 99
    avg_duration_seconds: Math.floor(Math.random() * 30 + 40), // 40 a 69
    min_duration: Math.floor(Math.random() * 20 + 20), // 20 a 39
    max_duration: Math.floor(Math.random() * 50 + 70), // 70 a 119
  });

  // PLASTICO
  fakeData.push({
    peca_tipo: "plastico",
    time_interval,
    date,
    time,
    total_separacoes: Math.floor(Math.random() * 50 + 50),
    avg_duration_seconds: Math.floor(Math.random() * 30 + 40),
    min_duration: Math.floor(Math.random() * 20 + 20),
    max_duration: Math.floor(Math.random() * 50 + 70),


  });
}
// const data = await getMaterials();

const mergedData = transformChartData(fakeData);

function calculateQuality(unidades: number, erros: number) {
  return Math.round(100 - (erros / unidades) * 100);
}

export default async function Home() {
  const session = await getServerSession()

  const chartData = fakeData.map(item => ({
    horario: item.time,
    metalico: item.peca_tipo === "metal" ? item.total_separacoes : 0,
    plastico: item.peca_tipo === "plastico" ? item.total_separacoes : 0,
    tempo_medio: item.avg_duration_seconds,
    erros: 0
  }));

  const tableDataMetalicos = fakeData.filter(item => item.peca_tipo === "metal").map(item => ({
    material: "Metálico",
    unidades: item.total_separacoes,
    tempo_medio: item.avg_duration_seconds,
    duracao_minima: item.min_duration,
    duracao_maxima: item.max_duration,
    erros: "",
    horario: item.time
  }));

  const tableDataPlasticos = fakeData.filter(item => item.peca_tipo === "plastico").map(item => ({
    material: "Plástico",
    unidades: item.total_separacoes,
    tempo_medio: item.avg_duration_seconds,
    duracao_minima: item.min_duration,
    duracao_maxima: item.max_duration,
    erros: "",
    horario: item.time
  }));


  return (
    <div className="font-roboto pt-6">
      <div className="justify-between flex items-center">
        <h1 className="px-10 text-2xl font-bold">Dashboard de Produção</h1>
        <div className="flex items-center">
          <div className="flex items-center gap-2 px-10">
            <h1 className="text-2xl font-bold">Olá, {session?.user?.name}</h1>
            {session?.user?.image && (
              <Image
                src={session.user.image}
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full"
                unoptimized={true}
              />
            )}

          </div>
        </div>

      </div>

      <div className="p-10 pl-5">
        <PrincipalChart
          name="Produção por Material"
          description={`${MATERIALS.METALICOS} (linha azul) e ${MATERIALS.PLASTICOS} (linha verde)`}
          data={mergedData}
        />
      </div>

      <div className="w-full p-10 pl-5">
        <Table>
          <TableCaption>Monitoramento de {MATERIALS.METALICOS}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Material</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Tempo Mínimo</TableHead>
              <TableHead>Tempo Máximo</TableHead>
              <TableHead>Tempo Médio</TableHead>
              <TableHead>Horário</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableDataMetalicos.map((item, index) => (
              <TableRow key={`metal-${index}`}>
                <TableCell className="font-medium">{item.material}</TableCell>
                <TableCell>{item.unidades.toLocaleString()}</TableCell>
                 <TableCell>{item.duracao_minima} seg.</TableCell>         
                <TableCell>{item.duracao_maxima} seg.</TableCell>
                <TableCell>{item.tempo_medio} seg.</TableCell>
                <TableCell>{item.horario}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="w-full p-10 pl-5">
        <Table>
          <TableCaption>Monitoramento de {MATERIALS.PLASTICOS}</TableCaption>
          <TableHeader>
            <TableRow >
              <TableHead className="w-[100px]">Material</TableHead>
              <TableHead>Quantidade</TableHead>
               <TableHead>Tempo Mínimo</TableHead>
              <TableHead>Tempo Máximo</TableHead>
              <TableHead>Tempo Médio</TableHead>
              <TableHead>Horário</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableDataPlasticos.map((item, index) => (
              <TableRow key={`plastic-${index}`}>
                <TableCell className="font-medium">{item.material}</TableCell>
                <TableCell>{item.unidades.toLocaleString()}</TableCell>
                 <TableCell>{item.duracao_minima} seg.</TableCell>         
                <TableCell>{item.duracao_maxima} seg.</TableCell>
                <TableCell>{item.tempo_medio} seg.</TableCell>
                <TableCell>{item.horario}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
