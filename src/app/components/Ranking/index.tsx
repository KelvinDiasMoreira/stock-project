import Image from "next/image";
import Icon from "@/assets/dolar-icon.png"
import Item from "../Item";

export default function Ranking() {
  return (
    <div className="flex flex-col mt-20 mb-20 items-center gap-8">
      <div className="flex items-center gap-2">
        <Image src={Icon} alt="Dolar" width={25} height={25} />
        <h2 className="text-azul-escuro text-3xl font-bold leading-6" >Rankings de Ações</h2>
      </div>
      <div
        className="border-2 border-solid border-c1c1c1 rounded-lg p-4"
        style={{ minHeight: "445px", minWidth: "350px" }}
      >
        <h3 className="text-2xl font-extrabold text-gray-800 leading-6 m-5 md:mx-4 my-3 whitespace-nowrap">
          Maiores Valor de Mercado
        </h3>
        <div className="border-t-2 border-solid border-gray-300 flex flex-col">
          <Item />
        </div>
      </div>
    </div>
  );
}
