import NavBar from "./NavBar";
import logo from "../images/logo512.png"

export default function Header() {
    return(
        <header className="flex bg-gray-900 text-white p-1 h-24 w-full justify-between items-center content-center">
            <img src={logo} alt="logo" className="h-full" />
            <NavBar />
        </header>
    )
}