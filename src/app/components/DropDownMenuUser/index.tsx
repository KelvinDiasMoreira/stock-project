"use client";

interface ItensProps {
  value: string;
  path: string;
}

interface DropDownMenuFunctionProps {}

export default function DropDownMenuFunction() {
  const itens: ItensProps[] = [
    {
      value: "Cadastre-se",
      path: "test",
    },
    {
      value: "Entrar",
      path: "pathLogin",
    },
  ];

  return (
    <>
      {itens.map((itens, index) => {
        return (
          <div key={index}>
            {itens.value}
          </div>
        );
      })}
    </>
  );
}
