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
import type {  ListaAgrupada, SeparacaoItem } from "@/types/api-response";
import { getServerSession } from "next-auth";
import { getMaterials } from "@/services/Get-Materials";

// Tipos de materiais fixos que temos
const MATERIALS = {
  METALICOS: "Metálicos",
  PLASTICOS: "Plásticos"
} as const;


const data = await getMaterials();
  
const chartData = (data: ListaAgrupada) =>
  data.map((grupo: SeparacaoItem[]) => {
    const itemMetal = grupo.find(item => item.peca_tipo === "metal");
    const itemPlastico = grupo.find(item => item.peca_tipo === "plastico");

    return {
      horario: grupo[0]?.time ?? "",
      metálico: itemMetal?.total_separacoes ?? 0,
      plástico: itemPlastico?.total_separacoes ?? 0,
      erros: 0, 
    };
  });

export default async function Home() {
  const session = await getServerSession();
  const data = await getMaterials();

  const chartData = data.map((grupo) => {
    const itemMetal = grupo.find((item) => item.peca_tipo === "metal");
    const itemPlastico = grupo.find((item) => item.peca_tipo === "plastico");

    const tempo_medio =
  itemMetal && itemPlastico
    ? (Number(itemMetal.avg_duration_seconds) + Number(itemPlastico.avg_duration_seconds)) / 2
    : itemMetal
    ? Number(itemMetal.avg_duration_seconds)
    : itemPlastico
    ? Number(itemPlastico.avg_duration_seconds)
    
    : 0;

    
    return {
      horario: grupo[0]?.time ?? "",
      metalico: itemMetal?.total_separacoes ?? 0,
      plastico: itemPlastico?.total_separacoes ?? 0,
      tempo_medio: tempo_medio,
      erros: 0,
    };
  });

  const tableDataMetalicos = data
    .map((grupo) => grupo.find((item) => item.peca_tipo === "metal"))
    .filter(Boolean)
    .map((item) => ({
      material: "Metálico",
      unidades: item!.total_separacoes,
      tempo_medio: item!.avg_duration_seconds,
      duracao_minima: item!.min_duration,
      duracao_maxima: item!.max_duration,
      erros: "",
      horario: item!.time,
    }));

  const tableDataPlasticos = data
    .map((grupo) => grupo.find((item) => item.peca_tipo === "plastico"))
    .filter(Boolean)
    .map((item) => ({
      material: "Plástico",
      unidades: item!.total_separacoes,
      tempo_medio: item!.avg_duration_seconds,
      duracao_minima: item!.min_duration,
      duracao_maxima: item!.max_duration,
      erros: "",
      horario: item!.time,
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
          data={chartData}
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
            {tableDataMetalicos.slice(0, 10).map((item, index) => (
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
            {tableDataPlasticos.slice(0, 10).map((item, index) => (
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