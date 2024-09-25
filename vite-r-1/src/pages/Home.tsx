import React, { useState } from "react"
import { Hel } from '../components/Hello'
import Form from '../components/Form'
import NavBar from "../components/NavBar"

export default function Home() {
    
    const soma = (a,b) => {
        return a+b
    }
    
    const [nome, setarNome] = useState()

    return (
        <div className="w-screen h-screen bg-zinc-700 p-3">
            <NavBar />
            helo world {soma(1,2)}
            <Hel idade={20} />
            <Form title={"NOME"} setarNome={setarNome} nome={nome} />
        </div>
    )
}