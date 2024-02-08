import { HelpCircle, Info } from "lucide-react";

export default function CardInfoStock() {
  return (
    <main className="w-[13.55rem] bg-white rounded-b-[0.625rem] rounded-t-[0.75rem]">
      <header className="flex justify-center bg-[#293038] rounded-t-[0.625rem]">
        <h1 className="text-[#d3b583] font-extrabold text-sm p-[0.625rem]">
          COTAÇÃO
        </h1>
      </header>
      <div className="flex p-[0.906rem] justify-center">
        <div className="flex">
          <h1 className="text-2xl font-extrabold text-[#222222]">R$ 35,84</h1>
          <div className="relative flex items-center right-[-25px] cursor-pointer">
            <HelpCircle className="text-[#9c9c9c] hover:text-[#d3b583]" width={20} height={20}/>
          </div>
        </div>
      </div>
    </main>
  );
}
