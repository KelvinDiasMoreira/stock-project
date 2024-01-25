import { AlignJustify, User, UserRound, Wallet2 } from "lucide-react";
import UserDrop from "./components/UserDrop";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <main>
      <header className="fixed h-20 flex top-0 bg-white w-full items-center justify-center gap-20">
        <div>
          <h1 className="text-3xl cursor-pointer">Ações Brasil</h1>
        </div>
        <div>
          <nav>
            <ul className="flex gap-4 items-center">
              <li className="text-[#666] font-bold cursor-pointer hover:text-[#a38c65] duration-500">
                Iniciante
              </li>
              <li className="text-[#666] font-bold cursor-pointer hover:text-[#a38c65] duration-500">
                Ações
              </li>
              <li className="text-[#666] font-bold cursor-pointer hover:text-[#a38c65] duration-500 border border-[#bebebe] flex gap-1 items-center rounded-3xl p-1 hover:shadow group">
                <span>
                  <Wallet2
                    width={15}
                    height={14}
                    color="#666"
                    className="group-hover:stroke-[#a38c65] duration-500"
                  />
                </span>
                <span>Carteira</span>
              </li>
            </ul>
          </nav>
        </div>
        <div>
        <UserDrop />
        </div>
      </header>
      {children}
    </main>
  );
}
