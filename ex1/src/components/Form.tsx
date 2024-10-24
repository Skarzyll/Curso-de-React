import { useEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";

interface FormProps {
    handleSubmit: (Event: React.ChangeEvent<HTMLInputElement>) => void,
    dadoprojeto: string,
}

export default function Form({ handleSubmit, dadoprojeto } : FormProps) {

    const [categorias, setcategoria] = useState([])
    const [projeto, setprojeto] = useState(dadoprojeto || {})

    const Submit = (e) => {
        e.preventDefault()
        handleSubmit(projeto)
    }

    function handlechange(e) {
        setprojeto({...projeto, [e.target.nome] : e.target.value})
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
            <form onSubmit={Submit} method="post" className="text-center">
                <Input 
                    nomelabel="Nome"
                    type="text" 
                    name=""
                    id="n" 
                    placeholder="Insira o nome do projeto." 
                    handlechange={handlechange} 
                    value={""} 
                />
                <Input 
                    nomelabel="Orçamento" 
                    type="number"
                    name=""
                    id="o"
                    placeholder="Insira o orçamento do projeto."
                    handlechange={handlechange}
                    value={""}
                />
                <Select 
                    nomelabel={"Selecione uma opção:"}
                    name={"categoria_id"} 
                    options={categorias} 
                    /* handlechange={function () {}}  */
                />
            </form>
            <button type="submit" className="bg-zinc-500 p-2">Criar projeto</button>
        </>
    )
}    