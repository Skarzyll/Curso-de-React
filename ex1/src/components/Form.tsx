import Input from "./Input";
import Select from "./Select";

export default function Form() {
    return(
        <>
            <form action="" method="post" className="text-center">
                <Input 
                    nomelabel="Nome"
                    type="text" 
                    name=""
                    id="n" 
                    placeholder="Insira o nome do projeto." 
                    handlechange={function(){}} 
                    value={""} 
                />
                <Input 
                    nomelabel="Orçamento" 
                    type="Number"
                    name=""
                    id="o"
                    placeholder="Insira o orçamento do projeto."
                    handlechange={function(){}}
                    value={""}
                />
                <Select nomelabel={"Selecione uma opção:"} name={"categoria_id"} id={""}  handlechange={function(){}} value={""} />
            </form>
            <button type="submit" className="bg-zinc-500 p-2">Criar projeto</button>
        </>
    )
}    