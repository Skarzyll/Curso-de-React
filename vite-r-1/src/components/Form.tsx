import React from "react";

export default function Form({ title, setarNome, nome }) {


    return (
        <>
            <h3>{title}</h3>
            <form>
                <label>
                    Seu nome: <input type="text" placeholder="Nome!" onChange={(e) => setarNome(e.target.value)} />
                </label>
            </form>
            {nome && <p>{nome}</p>}
        </>
    )
}