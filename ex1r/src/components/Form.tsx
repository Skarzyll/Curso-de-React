import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function Form() {

    const [categoria_id, setCategoriaId] = useState('')
    const [buy, setbuyid] = useState('')
    const [name, setname] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:9090/', {
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify({ 
                name, buy, categoria_id 
            }) 
        })

        if (response.ok) { 
            console.log('Projeto enviado com sucesso!'); 
        } else { 
            console.error('Erro ao enviar o projeto'); 
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit} action="/" method="post" className="text-center">
                <Input 
                    nomelabel="Nome"
                    type="text" 
                    name="name"
                    id="name" 
                    value={name}
                    useonchange={(e) => setname(e.target.value)}
                    placeholder="Insira o nome do projeto."  
                />
                <Input 
                    nomelabel="Orçamento" 
                    type="number"
                    name="buy"
                    id="buy"
                    value={buy}
                    useonchange={(e) => setbuyid(e.target.value)}
                    placeholder="Insira o orçamento do projeto."
                />
                <Select 
                    nomelabel={"Selecione uma opção:"}
                    name="categoria_id" 
                    value={categoria_id}
                    useonchange={(e) => setCategoriaId(e.target.value)}
                />
                
                <button type="submit" className="bg-zinc-500 p-2">Criar projeto</button>
            </form>
        </>
    )
}    