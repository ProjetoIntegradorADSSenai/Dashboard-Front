// app/[slug]/page.tsx
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

const generateRandomTime = () => {
  const hour = Math.floor(Math.random() * 10) + 8;
  const minute = Math.floor(Math.random() * 12) * 5;
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
};

const generateTimeSeries = (count: number) => {
  const startTime = generateRandomTime();
  const [startHour, startMinute] = startTime.split(':').map(Number);
  
  return Array.from({ length: count }, (_, i) => {
    const totalMinutes = startHour * 60 + startMinute + i * 5;
    const hour = Math.floor(totalMinutes / 60) % 24;
    const minute = totalMinutes % 60;
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  });
};

const generateData = (slug: string, count: number = 12) => {
  const productTypes = ['Reciclável', 'Não-reciclável', 'Perigoso', 'Orgânico', 'Industrial'];
  const timeSeries = generateTimeSeries(count);
  
  const tableData = Array.from({ length: count }, (_, index) => {
    const unidades = Math.floor(Math.random() * 1000) + 100;
    const erros = Math.floor(Math.random() * 50);
    const qualidade = 100 - Math.floor((erros / unidades) * 100);
    
    return {
      produto: `${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
      unidades,
      erros,
      qualidade,
      tipo: productTypes[Math.floor(Math.random() * productTypes.length)],
      horario: timeSeries[index],
    };
  });

  const chartData = tableData.map(item => ({
    horario: item.horario,
    producao: item.unidades,
    qualidade: item.qualidade,
    erros: item.erros,
  }));

  return { tableData, chartData };
};

export default async function Home({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;


  const formatedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);
  const { tableData, chartData } = generateData(slug);

  return (
    <div className="font-roboto pt-6 max-w-screen-lg">
      {formatedSlug}
      <div className="w-full p-10 pl-5">
        <PrincipalChart 
          name="Dados de Produção e Qualidade" 
          description={`Estatísticas de ${formatedSlug}`} 
          slug={formatedSlug}
          data={chartData} 
        />
      </div>

      <div className="w-full p-10 pl-5">
        <Table>
          <TableCaption>Lista de monitoramento</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Produto</TableHead>
              <TableHead>Unidades</TableHead>
              <TableHead>Erros</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Horário</TableHead>
              <TableHead>Assertividade (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.produto}</TableCell>
                <TableCell>{item.unidades.toLocaleString()}</TableCell>
                <TableCell>{item.erros}</TableCell>
                <TableCell>{item.tipo}</TableCell>
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