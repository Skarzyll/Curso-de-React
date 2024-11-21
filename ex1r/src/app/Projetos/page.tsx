'use client'

import GetDataProject from "@/components/GetDataProjects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";


export default function Projetos() {



    return (
        <div className="h-screen w-screen">
            <Header />
            <div className="min-h-min-70 p-2">
                <div className="flex w-full justify-between p-2">
                    <h1 className="text-3xl font-bold">Meus projetos</h1>
                    <button className="text-xl bg-zinc-900 text-white p-3 rounded-md">
                        <Link href={'/NovoProjeto'}>
                            Criar Projeto
                        </Link>
                    </button>
                </div>
                <GetDataProject />
            </div>
            <Footer />
        </div>
    )
}