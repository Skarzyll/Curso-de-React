import { Link } from "react-router-dom";

export default function NevBar() {
    return(
        <>
            <ol className="flex h-full w-2/4 items-stretch justify-between m-0 p-0">
                <li className="p-4"><Link to={"/"}>Home</Link></li>
                <li className="p-4"><Link to={"/pages/Contato.tsx"}>Contato</Link></li>
                <li className="p-4"><Link to={"/pages/Empresa.tsx"}>Empresa</Link></li>
                <li className="p-4"><Link to={"/pages/NovoProjeto.tsx"}>Novo Projeto</Link></li>
            </ol>
        </>
    )
}