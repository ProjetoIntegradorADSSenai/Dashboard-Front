import PrincipalChart from "@/components/principalChart";
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

// Tipos de materiais fixos que temos
const MATERIALS = {
  METALICOS: "Metálicos",
  PLASTICOS: "Plásticos"
} as const;

async function getProductionData() {
  return [
    { horario: "08:00", [MATERIALS.METALICOS]: 120, [MATERIALS.PLASTICOS]: 180, erros_metalicos: 5, erros_plasticos: 8 },
    { horario: "08:05", [MATERIALS.METALICOS]: 150, [MATERIALS.PLASTICOS]: 170, erros_metalicos: 3, erros_plasticos: 7 },
    { horario: "08:10", [MATERIALS.METALICOS]: 180, [MATERIALS.PLASTICOS]: 160, erros_metalicos: 6, erros_plasticos: 5 },
    { horario: "08:15", [MATERIALS.METALICOS]: 140, [MATERIALS.PLASTICOS]: 190, erros_metalicos: 4, erros_plasticos: 9 },
    { horario: "08:20", [MATERIALS.METALICOS]: 200, [MATERIALS.PLASTICOS]: 210, erros_metalicos: 7, erros_plasticos: 6 },
    { horario: "08:25", [MATERIALS.METALICOS]: 220, [MATERIALS.PLASTICOS]: 200, erros_metalicos: 5, erros_plasticos: 8 },
  ];
}

function calculateQuality(unidades: number, erros: number) {
  return Math.round(100 - (erros / unidades) * 100);
}

export default async function Home() {
  const productionData = await getProductionData();
  const session = await getServerSession()
  
  const chartData = productionData.map(item => ({
    horario: item.horario,
    producao: item[MATERIALS.METALICOS],  
    qualidade: item[MATERIALS.PLASTICOS], 
    erros: 0
  }));

  
  const tableDataMetalicos = productionData.map(item => ({
    material: MATERIALS.METALICOS,
    unidades: item[MATERIALS.METALICOS],
    erros: item.erros_metalicos,
    horario: item.horario,
    qualidade: calculateQuality(item[MATERIALS.METALICOS], item.erros_metalicos)
  }));

  
  const tableDataPlasticos = productionData.map(item => ({
    material: MATERIALS.PLASTICOS,
    unidades: item[MATERIALS.PLASTICOS],
    erros: item.erros_plasticos,
    horario: item.horario,
    qualidade: calculateQuality(item[MATERIALS.PLASTICOS], item.erros_plasticos)
  }));

  return (
    <div className="font-roboto pt-6">
      <div className="justify-between flex">

      <h1 className="px-10 text-2xl font-bold">Dashboard de Produção</h1>
      <h1 className="px-10 text-2xl font-bold">Olá, {session?.user?.name}</h1>
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
              <TableHead>Erros</TableHead>
              <TableHead>Horário</TableHead>
              <TableHead>Assertividade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableDataMetalicos.map((item, index) => (
              <TableRow key={`metal-${index}`}>
                <TableCell className="font-medium">{item.material}</TableCell>
                <TableCell>{item.unidades.toLocaleString()}</TableCell>
                <TableCell>{item.erros}</TableCell>
                <TableCell>{item.horario}</TableCell>
                <TableCell>{item.qualidade}%</TableCell>
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
              <TableHead>Erros</TableHead>
              <TableHead>Horário</TableHead>
              <TableHead>Assertividade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableDataPlasticos.map((item, index) => (
              <TableRow key={`plastic-${index}`}>
                <TableCell className="font-medium">{item.material}</TableCell>
                <TableCell>{item.unidades.toLocaleString()}</TableCell>
                <TableCell>{item.erros}</TableCell>
                <TableCell>{item.horario}</TableCell>
                <TableCell>{item.qualidade}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}