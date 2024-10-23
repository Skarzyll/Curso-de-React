import { useEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function Form() {

    const [categorias, setcategoria] = useState([])
    const [valorinput, setvalorinput] = useState("")
    const [orcinput, setorcinput] = useState("")

    const handlechange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setvalorinput(event.target.value)
    }
    const handlechange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setorcinput(event.target.value)
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
            <form action="" method="post" className="text-center">
                <Input 
                    nomelabel="Nome"
                    type="text" 
                    name=""
                    id="n" 
                    placeholder="Insira o nome do projeto." 
                    handlechange={handlechange1} 
                    value={valorinput} 
                />
                <Input 
                    nomelabel="Orçamento" 
                    type="number"
                    name=""
                    id="o"
                    placeholder="Insira o orçamento do projeto."
                    handlechange={handlechange2}
                    value={orcinput}
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