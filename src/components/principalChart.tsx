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
  plastico: {
    label: "Plástico",
    color: "hsl(var(--primary))",
  },
  metalico: {
    label: "Metálico",
    color: "hsl(var(--chart-2))",
  },
  tempo_medio: {
    label: "Tempo méd.",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

interface dataProps {
  slug?: string;
  name: string;
  data: any[];
  description: string
}

export default function PrincipalChart({ data, name, description, slug }: dataProps) {
  console.log("Data received in PrincipalChart:", data);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[300px]">
          <LineChart
            data={data}
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
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="metalico"
              stroke="hsl(var(--chart-4))"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="plastico"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="tempo_medio"
              stroke="hsl(var(--chart-3))"
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
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing production data for the last period
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}