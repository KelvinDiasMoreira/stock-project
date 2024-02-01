import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Stocks } from "../SerchComponent";
import { Router } from "next/router";

interface DropDownProps {
  itens: Stocks[] | undefined;
  position: { bottom: number; left: number; right: number };
  hidden: boolean;
}

export default function DropDown({ itens, position, hidden }: DropDownProps) {
  if (hidden) {
    return <></>;
  } else if (!itens?.length) {
    return <></>;
  } else {
    return (
      <div
        className={`flex flex-col text-2xl absolute bg-white rounded-xl shadow-[0px_0px_10px_rgba(0,0,0,.251)] border-[2px] border-[#d3b583] animate-userDropDownAnimationIn`}
        style={{
          top: `${position.bottom + 10}px`,
          width: `${(position.left / 2 + position.right / 2) / 2}px`,
        }}
      >
        {itens &&
          itens.map((i, index: number) => (
            <main
              className={`${index === 0 && "hover:rounded-t-xl"} ${
                index === itens.lastIndexOf(itens[itens.length - 1])
                  ? "hover:rounded-b-xl"
                  : "border-b-[1px]"
              } cursor-pointer p-3 hover:bg-[#e5e5e5] duration-500 flex gap-5`}
              key={i.stock}
            >
              <img src={`${i.logo}`} />
              <div className="flex flex-col gap-3">
                <section>
                  <h3 className="text-sm text-#333">
                    <strong>{i.stock}</strong> - {i.name}
                  </h3>
                </section>
                <article className="flex gap-5">
                  <span className="text-[#999] font-bold text-sm">
                    R$ {i.close.toFixed(2).toString().replace(".", ",")}
                  </span>
                  <div className="flex items-center">
                    <h3
                      className={`${
                        i.change < 0 ? "text-[#f24242]" : "text-[#20ac25]"
                      } font-bold text-sm`}
                    >
                      {i.change.toFixed(2).toString().replace(".", ",")}%
                    </h3>
                    <span
                      className={`${
                        i.change < 0 ? "text-[#f24242]" : "text-[#20ac25]"
                      } flex items-center`}
                    >
                      {i.change < 0 ? (
                        <ArrowDownRight size={18} />
                      ) : (
                        <ArrowUpRight size={18} />
                      )}
                    </span>
                  </div>{" "}
                </article>
              </div>
            </main>
          ))}
      </div>
    );
  }
}
