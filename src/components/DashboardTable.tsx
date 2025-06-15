import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Data {
  material: string;
  unidades: number;
  erros: string;
  horario: string;
  intervalo_tempo: string;
  dia: string;
}

interface DashboardTableProps {
  name: string;
  data: Data[];
}

export default function DashboardTable({ name, data }: DashboardTableProps) {
  return (
    <div className="w-full p-10 pl-5">
      <Table>
        <TableCaption>Monitoramento de {name}</TableCaption>
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
          {data.slice(0, 10).map((item, index) => (
            <TableRow key={`material-${index}`}>
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
  );
}