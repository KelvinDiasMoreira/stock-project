export default function Home() {
  return (
    <section className="bg-[#2A2F38] w-full h-[25rem] image-background-div flex justify-center">
      <main className="flex flex-col mt-24 items-center gap-8">
      <div className="max-w-[50rem]">
        <h1 className="text-4xl text-[#fff] leading-10 font-semibold text-center">Pesquise pelo ativo desejado para ter acesso a cotação</h1>
      </div>
      <div>
        <input type="text" className="text-lg text-[#666] p-[0.8px] leading-[3.75rem] rounded-[1.87rem] border outline-none border-[#88601a]"/>
      </div>
      </main>
    </section>
  );
}
