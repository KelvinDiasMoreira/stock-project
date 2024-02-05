import dynamic from "next/dynamic";

const Children = dynamic(() => import('./children'), {ssr: false})

export default function StockInfo(dataParams: {
  params: Record<string, string>;
  searchParams: Record<string, string>;
}) {
    return (
      <Children paramToSearch={dataParams.params.name}/>
    )
}
