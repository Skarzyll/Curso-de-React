export default function Form() {
    return(
        <form action="" method="post" className="border border-black">
            <label className="">
                nome: 
                <input type="text" name="" id="" placeholder="Insira o nome do projeto." />
            </label><br />
            <label>
                Orçamento: 
                <input type="text" name="" id="" placeholder="Insira o orçamento do projeto." />
            </label><br />
            <select name="" id="">
                <option value="a">a</option>
                <option value="">s</option>
            </select>
        </form>
    )
}    