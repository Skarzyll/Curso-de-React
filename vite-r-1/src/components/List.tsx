import React from "react"

export default function Mylist({ mya }) {
    
    return mya.map(itens => 
        <>
            <br /><a href="#" className="bg-zinc-500">{itens}</a> 
        </>
    )
}