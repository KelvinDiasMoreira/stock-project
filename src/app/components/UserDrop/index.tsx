"use client";
import { AlignJustify, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

export interface UserDrop {}

export default function UserDrop({ ...props }: UserDrop) {
  const itens: { value: string; path: string }[] = [
    {
      value: "Cadastre-se",
      path: "test",
    },
    {
      value: "Entrar",
      path: "pathLogin",
    },
  ];

  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const [offsetSection, setOffSetSection] = useState<{
    left: number;
    bottom: number;
  }>();
  const openDropDownMenu = () => {
    setDropDownIsOpen(true);
  };

  useEffect(() => {
    const verifyMouse = (e: MouseEvent) => {
      const sectionUser = window.document.getElementById("sectionUser");
      const offSetSection = sectionUser?.getBoundingClientRect();
      setOffSetSection({
        left: offSetSection!.x,
        bottom: offSetSection!.bottom,
      });
      if (
        offSetSection!.x > e.clientX ||
        offSetSection!.right < e.clientX ||
        offSetSection!.y > e.clientY ||
        offSetSection!.bottom < e.clientY
      ) {
        setDropDownIsOpen(false);
      }
    };
    window.addEventListener("mousedown", verifyMouse);

    return () => {
      removeEventListener("mousedown", verifyMouse);
    };
  }, []);

  return (
    <>
      <section
        id="sectionUser"
        className="flex border border-[#a38c65] border-solid p-1 rounded-3xl gap-3 cursor-pointer items-center"
        onClick={() => openDropDownMenu()}
      >
        <div>
          <AlignJustify width={25} height={25} color="#a38c65" />
        </div>
        <div>
          <div className="rounded-full z-0 bg-[#717171] flex justify-center align-middle items-center">
            <UserRound width={25} height={25} color="#fff" fill="#fff" />
          </div>
        </div>
      </section>
      {dropDownIsOpen && offsetSection && (
        <div
          style={{
            top: `${offsetSection?.bottom + 20}px`,
            left: `${offsetSection?.left - 120}px`,
          }}
          className={`absolute bg-white rounded-md shadow-md`}
        >
          {itens.map((itens, index) => {
            return (
              <div className="cursor-pointer p-4 hover:bg-[#e5e5e5] hover:text-[#a38c65] min-w-60 text-left">
                <h1 className="text-[#333] font-bold text-sm" key={index}>{itens.value}</h1>
              </div>
            )
          })}
        </div>
      )}
    </>
  );
}
