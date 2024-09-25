import React from "react";
import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

export default function NotFoundPage(){
    const error = useRouteError()
    console.log(error);
    

    return(
        <>
            <NavBar />
            <header>
                404
                <strong>NOT FOUND PAGE</strong>
            </header>
        </>
    )
}