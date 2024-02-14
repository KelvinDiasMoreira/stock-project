
import TooltipCard from "./tooltipCard";

interface CardInfoStockProps {
  name: string;
  value: string | undefined;
  isMoney?: boolean;
  isPercentage?: boolean;
  textTooltip?: string
}
export default function CardInfoStock({
  name,
  isMoney,
  isPercentage,
  value,
  textTooltip
}: CardInfoStockProps) {
  return (
    <main className="w-[13.55rem] bg-white rounded-b-[0.625rem] rounded-t-[0.75rem]">
      <header className="flex justify-center bg-[#293038] rounded-t-[0.625rem]">
        <h1 className="text-[#d3b583] font-extrabold text-sm p-[0.625rem]">
          {name}
        </h1>
      </header>
      <div className="flex p-[0.906rem] justify-center">
        <div className="flex">
          <h1 className="text-2xl font-extrabold text-[#222222]">
            {isMoney && "R$ "}
            {value}
            {isPercentage && "%"}
          </h1>
          <TooltipCard text={textTooltip}/>
        </div>
      </div>
    </main>
  );
}
