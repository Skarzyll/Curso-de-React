import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function Form({ dadoprojeto }) {

    const [projeto, setprojeto] = useState(dadoprojeto || {})
    
    function handlechange(e) {
        setprojeto({...projeto, [e.target.name] : e.target.value})
    }

    function handlecategoria(e) {
        setprojeto({
            ...projeto,
            categoria: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
    }

    return(
        <>
            <form action="/DB/index.html" method="post" className="text-center">
                <Input 
                    nomelabel="Nome"
                    type="text" 
                    name="name"
                    id="" 
                    value={projeto.name}
                    placeholder="Insira o nome do projeto." 
                    handleonchange={handlechange}  
                />
                <Input 
                    nomelabel="Orçamento" 
                    type="number"
                    name="buy"
                    id="buy"
                    value={projeto.buy}
                    placeholder="Insira o orçamento do projeto."
                    handleonchange={handlechange}
                />
                <Select 
                    nomelabel={"Selecione uma opção:"}
                    name={"categoria_id"} 
                    value={projeto.categoria ? projeto.categoria.id : ''}
                    handleonchange={handlecategoria} 
                />
                
                <button type="submit" className="bg-zinc-500 p-2">Criar projeto</button>
            </form>
        </>
    )
}    