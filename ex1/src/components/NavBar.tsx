import { Link } from "react-router-dom";

export default function NevBar() {
    return(
        <>
            <ol className="h-5 w-5 flex items-stretch justify-between">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/pages/Contato.tsx"}>Contato</Link></li>
                <li><Link to={"/pages/Empresa.tsx"}>Empresa</Link></li>
                <li><Link to={"/pages/NovoProjeto.tsx"}>Novo Projeto</Link></li>
                </ol>
        </>
    )
}