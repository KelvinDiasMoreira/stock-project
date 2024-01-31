import { Stocks } from "../SerchComponent";

interface DropDownProps {
  itens: Stocks[] | undefined;
  position: { bottom: number; left: number; right: number };
  hidden: boolean;
}

export default function DropDown({ itens, position, hidden }: DropDownProps) {
  if (hidden) {
    return <></>;
  } else if (!itens?.length) {
    return <></>
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
              } cursor-pointer p-3 hover:bg-[#e5e5e5] duration-500 flex gap-2`}
              key={i.stock}
            >
              <img src={`${i.logo}`}/>
              <div className="flex flex-col">
              <section>
                <h3 className="text-sm text-#333 font-normal">{i.stock} -</h3>
              </section>
              <div>
                <span className="text-[#999] font-bold text-sm">R$ {(i.close.toFixed(2).toString().replace('.', ','))} </span>
              </div>

              </div>
            </main>
          ))}
      </div>
    );
  }
}
