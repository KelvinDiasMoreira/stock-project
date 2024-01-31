import SearchComponent from "./components/SerchComponent";
// import Ranking from "./components/Ranking";

export default function Home() {
  return (
    <section className="bg-[#2A2F38] w-full h-[91.7vh] image-background-div flex justify-center">
      <main className="flex flex-col mt-[12.5rem] items-center gap-8">
        <div className="max-w-[50rem]">
          <h1 className="text-6xl text-[#fff] leading-[5rem] font-semibold text-center">
            Pesquise pelo ativo desejado para ter acesso a cotação
          </h1>
        </div>
        <SearchComponent />
      </main>
    </section>
  );
}
