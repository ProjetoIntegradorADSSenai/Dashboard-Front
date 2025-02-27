"use client"

import PrincipalChart  from "@/components/principalChart";

const chartData = [
  { schedule: "January", desktop: 186,},
  { schedule: "February", desktop: 305},
  { schedule: "March", desktop: 237},
  { schedule: "April", desktop: 73},
  { schedule: "May", desktop: 209},
  { schedule: "June", desktop: 500},
]

export default async function Home({params}: { params: Promise<{slug: string}>}){
  const slug = (await params).slug
  const formatedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);
  return (
    <div className="font-roboto pt-6">
      {formatedSlug}
    <div className="w-82 p-10 pl-5" >
      <PrincipalChart name="Dados individuais" description="Janeiro 2025" data={chartData} />
    </div>
    </div>
  );
}
