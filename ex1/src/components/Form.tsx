import Input from "./Input";

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
                    //value="" 
                />
                <Input 
                    nomelabel="Orçamento" 
                    type="Number"
                    name=""
                    id="o"
                    placeholder="Insira o orçamento do projeto."
                    handlechange={function(){}}
                    //value=""
                />
                <select name="" id="" className="m-2" >
                    <option value="" disabled selected>Selecione a categoria</option>
                    <option value="a">a</option>
                    <option value="">s</option>
                </select>
            </form>
            <button type="button" className="bg-zinc-500 p-2">Criar projeto</button>
        </>
    )
}    