import React from "react";
import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";
import { FaCrosshairs, FaFacebook } from 'react-icons/fa6'

export default function NotFoundPage(){
    const error = useRouteError()
    console.log(error);
    

    return(
        <>
            <NavBar />
            <header>
                404
                <strong>NOT FOUND PAGE</strong>
                <FaCrosshairs className="text-cyan-700 h-9 w-9" />
                <FaFacebook />
            </header>
        </>
    )
}