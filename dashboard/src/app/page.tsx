// app/page.tsx
import { ProductionChart } from "@/components/productionChart"

// Simulação de dados da API
async function getProductionData() {
  return [
    { horario: "08:00", metalicos: 120, plasticos: 180 },
    { horario: "08:05", metalicos: 150, plasticos: 170 },
    { horario: "08:10", metalicos: 180, plasticos: 160 },
    { horario: "08:15", metalicos: 140, plasticos: 190 },
    { horario: "08:20", metalicos: 200, plasticos: 210 },
    { horario: "08:25", metalicos: 220, plasticos: 200 },
  ]
}

export default async function Home() {
  const productionData = await getProductionData()

  return (
    <div className="font-roboto pt-6">
      <h1 className="px-10 text-2xl font-bold">Dashboard de Produção</h1>
      <div className="p-10 pl-5">
        <ProductionChart data={productionData} />
      </div>
    </div>
  )
}