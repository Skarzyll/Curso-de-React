import { useEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import Projetos from "../pages/Projetos";

export default function Form({ handleSubmit, dadoprojeto }) {

    const [categorias, setcategoria] = useState([])
    const [projeto, setprojeto] = useState(dadoprojeto || {})

    const Submit = (e) => {
        e.preventDefault()
        handleSubmit(projeto)
        console.log(projeto);
        
    }
    
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

    useEffect(() => {
        fetch(
        "http://localhost:5000/categoria", {
            method: "Get",
            headers: {
                'content-type': "applications/json",
            },
        })
        .then((resposta) => resposta.json())
        .then((respjson) => {
            setcategoria(respjson)
        })
        .catch(e => console.error(`o erro foi ${e}`))
    }, [])

    return(
        <>
            <form onSubmit={Submit} action="./Projetos.tsx" method="post" className="text-center">
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
                    options={categorias}
                    value={projeto.categoria ? projeto.categoria.id : ''}
                    handleonchange={handlecategoria} 
                />
                
                <button type="submit" className="bg-zinc-500 p-2">Criar projeto</button>
            </form>
        </>
    )
}    