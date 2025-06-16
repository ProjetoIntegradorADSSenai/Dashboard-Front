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
import { generateTableData } from "@/utils/generate-table-data";
import { formatDate } from "@/utils/format-date";
import { formatDateTime } from "@/utils/format-date-time";
import DashboardTable from "@/components/DashboardTable";

// Tipos de materiais fixos que temos
const MATERIALS = {
  METALICOS: "Metálicos",
  PLASTICOS: "Plásticos",
  DESCARTE: "Descarte"
} as const;

export default async function Home() {
  const session = await getServerSession();
  const data = await getMaterials();

  const chartData = data.map((grupo) => {
    const itemMetal = grupo.find((item) => item.peca_tipo === "metal");
    const itemPlastico = grupo.find((item) => item.peca_tipo === "plastico");
    const itemLixo = grupo.find((item) => item.peca_tipo === "lixo");



    return {
      horario: grupo[0]?.time ?? "",
      metalico: itemMetal?.total_separacoes ?? 0,
      plastico: itemPlastico?.total_separacoes ?? 0,
      descarte: itemLixo?.total_separacoes ?? 0,
      erros: 0,
    };
  });


  const tableDataMetalicos = generateTableData(data, "metal", "Metálico");
  const tableDataPlasticos = generateTableData(data, "plastico", "Plástico");
  const tableDataLixo = generateTableData(data, "lixo", "Descarte");

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

      <DashboardTable name={MATERIALS.METALICOS} data={tableDataMetalicos}></DashboardTable>
      <DashboardTable name={MATERIALS.PLASTICOS} data={tableDataPlasticos}></DashboardTable>
      <DashboardTable name={MATERIALS.DESCARTE} data={tableDataLixo}></DashboardTable>

    </div>
  );
}
