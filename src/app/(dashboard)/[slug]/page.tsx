import { ProductionChart } from "@/components/productionChart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getMaterials } from "@/services/Get-Materials";
import { formatDate } from "@/utils/format-date";
import { getServerSession } from "next-auth";
import Image from 'next/image';

const slugMap: Record<string, string> = {
  plasticos: "plastico",
  metalicos: "metal",
  lixo: "lixo",
};

const formatedSlugMap: Record<string, string> = {
  plastico: "Plástico",
  metalico: "Metálico",
  lixo: "Lixo",
};




type Params = Promise<{ slug: string }>



export default async function Home(props: { params: Params }) {
  const session = await getServerSession();


  const params = await props.params;
  const rawSlug = params.slug.toLowerCase();
  const tipoMaterial = slugMap[rawSlug] || rawSlug;

  const formatedSlug =
    formatedSlugMap[tipoMaterial] ||
    tipoMaterial.charAt(0).toUpperCase() + tipoMaterial.slice(1);

  const dadosOriginais = await getMaterials();
  const flatData = dadosOriginais.flat();

  const dadosFiltrados = flatData.filter(
    (item) => item.peca_tipo === tipoMaterial
  );

  const chartData = dadosFiltrados.map((item) => ({
    horario: item.time,
    unidades: item.total_separacoes,
    erros: 0,
  }));

  const tableData = dadosFiltrados.map((item) => ({
    unidades: item.total_separacoes,
    horario: item.time,
    dia: item.date,
  }));

  return (
    <div className="font-roboto pt-6">
      <div className="justify-between flex items-center">
        <h1 className="px-10 text-2xl font-bold">{formatedSlug}</h1>
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

      <div className="w-full p-10 pl-5">
        <ProductionChart
          name={`Dados de Produção - ${formatedSlug}`}
          description={`Estatísticas de peças do tipo ${formatedSlug}`}
          slug={formatedSlug}
          data={chartData}
        />
      </div>

      <div className="w-full p-10 pl-5">
        <Table>
          <TableCaption>Monitoramento de {formatedSlug}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Unidades</TableHead>
              <TableHead>Horários</TableHead>
              <TableHead>Dia</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.unidades.toLocaleString()}</TableCell>
                <TableCell>{item.horario}</TableCell>
                <TableCell>{formatDate(item.dia)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
