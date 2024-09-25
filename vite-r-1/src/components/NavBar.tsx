import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
    return(
        <ul className="flex justify-items-start space-x-1 border">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pages/Conta.tsx">Conta</Link></li>
        </ul>
    )
}