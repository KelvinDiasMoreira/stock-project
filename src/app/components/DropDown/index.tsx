interface DropDownProps {
  itens: string[] | undefined;
  position: { bottom: number; left: number; right: number };
  hidden: boolean;
}

export default function DropDown({ itens, position, hidden }: DropDownProps) {
  if (hidden) {
    return <></>;
  } else if (!itens?.length) {
   itens?.push('Não encontrado nenhum resultado')
  } else {
    return (
      <div
        className={`flex flex-col gap-6 p-4 text-2xl absolute  bg-white rounded-xl shadow-[0px_0px_10px_rgba(0,0,0,.251)] border-[2px] border-[#d3b583]`}
        style={{
          top: `${position.bottom + 20}px`,
          width: `${(position.left / 2 + position.right / 2) / 2}px`,
        }}
      >
        {itens &&
          itens.map((i) => (
            <div className="border-b-[2px]" key={i}>
              {i}
            </div>
          ))}
      </div>
    );
  }
}
