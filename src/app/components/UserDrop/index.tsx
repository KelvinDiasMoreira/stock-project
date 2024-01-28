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
  const [clickedFirstTime, setclickedFirstTime] = useState(false);
  const [closing, setClosing] = useState(false)
  const openDropDownMenu = () => {
    if (clickedFirstTime) {
      setClosing(true)
      setTimeout(() => {
        setDropDownIsOpen(false);
        setclickedFirstTime(false);
        setClosing(false)
      }, 400);
    } else {
      setDropDownIsOpen(true);
      setclickedFirstTime(true);
    }
  };

  useEffect(() => {
    const verifyMouse = (e: any) => {
      const sectionUser = window.document.getElementById("sectionUser");
      const dropdown = window.document.getElementById("dropdownId");
      const offsetSection = sectionUser?.getBoundingClientRect();
      if (
        (offsetSection!.x > e.clientX ||
          offsetSection!.right < e.clientX ||
          offsetSection!.y > e.clientY ||
          offsetSection!.bottom < e.clientY) &&
        dropdown !== null &&
        !dropdown?.contains(e.target)
      ) {
        setDropDownIsOpen(false);
        setclickedFirstTime(false);
      }
    };

    window.addEventListener("click", verifyMouse);

    return () => {
      removeEventListener("click", verifyMouse);
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
        <div
          id="dropdownId"
          style={{
            top: `62px`,
            left: `1050px`,
          }}
          // 0 0 10px rgba(0,0,0,.161)
          className={`absolute ${closing && "animate-userDropDownAnimationOut"} ${dropDownIsOpen ? "animate-userDropDownAnimationIn" : "hidden"} bg-white rounded-md shadow-[0px_0px_10px_rgba(0,0,0,.161)] min-w-[230px] `}
        >
          {itens.map((itens, index) => {
            return (
              <div
                className="cursor-pointer p-3 hover:bg-[#e5e5e5] group text-left duration-500"
                key={index}
              >
                <h1 className="text-[#333] font-bold text-sm group-hover:text-[#a38c65] duration-300">
                  {itens.value}
                </h1>
              </div>
            );
          })}
        </div>
    </>
  );
}
