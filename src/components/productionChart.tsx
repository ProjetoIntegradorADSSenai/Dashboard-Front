// components/productionChart.tsx
"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  metalicos: {
    label: "Metálicos",
    color: "hsl(var(--primary))",
  },
  plasticos: {
    label: "Plásticos",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

interface DataProps {
  horario: string;
  metalicos: number;
  plasticos: number;
}

export function ProductionChart({ data }: { data: DataProps[] }) {
  // Transforma os dados para o formato esperado pelo ChartContainer
  const chartData = data.map(item => ({
    horario: item.horario,
    producao: item.metalicos, // Reutiliza a chave 'producao' para metálicos
    qualidade: item.plasticos, // Reutiliza a chave 'qualidade' para plásticos
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Produção de Materiais</CardTitle>
        <CardDescription>Quantidade por tipo de material</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[300px]">
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="horario"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={Math.floor(data.length / 6)}
            />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="producao" 
              stroke="hsl(var(--chart-4))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="qualidade"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Dados em tempo real <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Comparação entre materiais metálicos e plásticos
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}