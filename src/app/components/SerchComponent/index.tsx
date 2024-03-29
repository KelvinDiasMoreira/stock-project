"use client";
import { api } from "@/app/api/api";
import { Search } from "lucide-react";
import { useRef, useState } from "react";
import DropDown from "../DropDown";

export default function SearchComponent() {
  const [search, setSearchs] = useState<string[] | undefined>(undefined);
  const refComponentSearch = document.getElementById("sectionSearch");

  const getSearch = async (input: string) => {
    try {
      const { data } = await api.get<{ indexes: string[]; stocks: string[] }>(
        `available?search=${input}`,
        {
          params: {
            token: `${process.env.secret}`,
          },
        }
      );
      setSearchs(data.stocks);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputToSearch = (event: any) => {
    if (event.target.value.length > 2 && event.target.value.length < 6) {
      getSearch(event.target.value);
    } else if (event.target.value.length === 0) {
      setSearchs(undefined);
    } else {
      return;
    }
  };
  return (
    <>
      <section
        id="sectionSearch"
        className="p-[5px] leading-[3.75rem] rounded-[1.87rem] border outline-none border-[#88601a] flex bg-white items-center w-[40rem]"
      >
        <div className="ml-4">
          <Search />
        </div>
        <input
          type="text"
          className="p-6 h-5 outline-none rounded-[1.87rem] text-lg text-[#666] w-[28rem]"
          placeholder="Pesquise pelo ativo desejado"
          onKeyUp={(e) => handleInputToSearch(e)}
        />
        <div className="rounded-[1.87rem] h-10 bg-[#a38c65] flex items-center p-5 mr-4">
          <span className="text-white font-bold cursor-pointer">PESQUISAR</span>
        </div>
      </section>

      <DropDown
        hidden={search ? false : true}
        itens={search}
        position={{
          bottom: Number(refComponentSearch?.getBoundingClientRect().bottom),
          left: Number(refComponentSearch?.getBoundingClientRect().left),
          right: Number(refComponentSearch?.getBoundingClientRect().right),
        }}
      />
    </>
  );
}
