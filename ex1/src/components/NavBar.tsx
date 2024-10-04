import { Link } from "react-router-dom";

export default function NevBar() {
    return(
        <>
            <ol className="flex h-full w-2/4 items-center justify-evenly">
                <li><Link to={"/"}  className="pt-3 pb-3 pr-5 pl-5">Home</Link></li>
                <li><Link to={"/pages/Contato.tsx"}  className="pt-3 pb-3 pr-5 pl-5">Contato</Link></li>
                <li><Link to={"/pages/Empresa.tsx"}  className="pt-3 pb-3 pr-5 pl-5">Empresa</Link></li>
            </ol>
        </>
    )
}