import Image from "next/image";
import Petro from "@/assets/petro.jpeg"

export default function Item() {
  return (
          <div className="flex flex-row items-center justify-between p-4 cursor-pointer hover:bg-a38c65">
            <Image src={Petro} alt="Petro" width={40} height={40} />
            <div className="flex flex-col items-center">
              <h4 className="text-black text-xl font-extrabold leading-4 tracking-normal">
                PETR4
              </h4>
              <span className="text-gray-300 inline-block font-roboto text-xs font-normal leading-5 tracking-normal overflow-hidden whitespace-nowrap w-full">
                PETROBRAS
              </span>
            </div>
            <div className="text-black text-2xl font-extrabold leading-6 tracking-normal text-right w-fit-content">
              R$ 536,14 B
            </div>
          </div>
  );
}
