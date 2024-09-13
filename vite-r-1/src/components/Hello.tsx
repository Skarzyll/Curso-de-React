import React, { useState } from "react";
import PropTypes, { func } from "prop-types";

Hel.prototype = {
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired
}

Hel.defaultProps = {
    nome: "junior"
}

function Hel( /*desestruturacao -> */ {nome, idade} ) {

    const [use, state] = useState(0)

    function meuEvento() {
        console.log("o evento aconteceu");
        state(use => use + 1)
    }
    
    
    return (
        <>
            <p className="font-bold text-zinc-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur officia velit beatae quisquam eaque tempore alias consequuntur corrupti voluptas dolor quibusdam suscipit dolorem, sit necessitatibus repellendus quod? Nemo, veniam.
            </p>
            
            <p>Fala ai {nome} {idade}!!</p>
            <button onClick={meuEvento} className="border-black">{use}</button>
        </>
    )
}

export {Hel}