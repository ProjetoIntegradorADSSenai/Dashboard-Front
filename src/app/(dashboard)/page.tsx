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
import { getServerSession } from "next-auth";
import { getMaterials } from "@/services/Get-Materials";

// Tipos de materiais fixos que temos
const MATERIALS = {
  METALICOS: "Metálicos",
  PLASTICOS: "Plásticos"
} as const;

export default async function Home() {
  const session = await getServerSession();
  const data = await getMaterials();

  const chartData = data.map((grupo) => {
    const itemMetal = grupo.find((item) => item.peca_tipo === "metal");
    const itemPlastico = grupo.find((item) => item.peca_tipo === "plastico");



    return {
      horario: grupo[0]?.time ?? "",
      metalico: itemMetal?.total_separacoes ?? 0,
      plastico: itemPlastico?.total_separacoes ?? 0,
      erros: 0,
    };
  });


  const tableDataMetalicos = data
    .map((grupo) => grupo.find((item) => item.peca_tipo === "metal"))
    .filter(Boolean)
    .map((item) => ({
      material: "Metálico",
      unidades: item!.total_separacoes,
      erros: "",
      horario: item!.time,
      intervalo_tempo: item!.time_interval,
      dia: item!.date,
    }));

  const tableDataPlasticos = data
    .map((grupo) => grupo.find((item) => item.peca_tipo === "plastico"))
    .filter(Boolean)
    .map((item) => ({
      material: "Plástico",
      unidades: item!.total_separacoes,
      erros: "",
      horario: item!.time,
      intervalo_tempo: item!.time_interval,
      dia: item!.date,
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
              <TableHead>Horários</TableHead>
              <TableHead>Intervalo de Tempo</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableDataMetalicos.slice(0, 10).map((item, index) => (
              <TableRow key={`metal-${index}`}>
                <TableCell className="font-medium">{item.material}</TableCell>
                <TableCell>{item.unidades.toLocaleString()}</TableCell>
                <TableCell>{item.horario}</TableCell>
                <TableCell>{item.intervalo_tempo}</TableCell>
                <TableCell>{item.dia}</TableCell>
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
              <TableHead>Horários</TableHead>
              <TableHead>Intervalo de Tempo</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableDataPlasticos.slice(0, 10).map((item, index) => (
              <TableRow key={`plastic-${index}`}>
                <TableCell className="font-medium">{item.material}</TableCell>
                <TableCell>{item.unidades.toLocaleString()}</TableCell>
                <TableCell>{item.horario}</TableCell>
                <TableCell>{item.intervalo_tempo}</TableCell>
                <TableCell>{item.dia}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
