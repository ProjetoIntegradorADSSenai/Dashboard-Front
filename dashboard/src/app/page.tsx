import PrincipalChart  from "@/components/principalChart";

const chartData = [
  { schedule: "9:30", desktop: 186, mobile: 100 },
  { schedule: "9h35", desktop: 305, mobile: 200 },
  { schedule: "9h40", desktop: 237, mobile: 120 },
  { schedule: "9h45", desktop: 73, mobile: 190 },
  { schedule: "9h50", desktop: 209, mobile: 130 },
  { schedule: "9h55", desktop: 500, mobile: 140 },
]

export default function Home() {
  return (
    <div className="font-roboto pt-6">
      Dashboard
    <div className="w-82 p-10 pl-5" >
      <PrincipalChart description="Janeiro 2025" name="Dados Gerais" data={chartData} />
    </div>
    </div>
  );
}
