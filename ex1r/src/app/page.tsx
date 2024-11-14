"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="min-h-min-70 p-3 bg-white text-center">
        <h1 className="text-3xl m-2">
          <strong>
            Bem-Vindo ao 
            <span className="bg-zinc-950 text-yellow-500 p-1">Costs</span>
          </strong>
        </h1>
        <p className="text-neutral-600">
          Comece a gerenciar seus projetos agora mesmo!
        </p>
        <LinkButton to={"/NovoProjeto"} text={"Novo Projeto!"} />
      </div>
      <Footer />
    </div>
  );
}
