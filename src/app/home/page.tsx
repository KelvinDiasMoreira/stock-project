import Image from "next/image";
import Banner from "../../../public/banner-02.png";
export default function Home() {
  return (
    <div className="bg-[#2A2F38] h-full">
      <Image src={Banner} alt="Banner" className="z-0"/>
    </div>
  );
}
