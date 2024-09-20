import React, { useState } from 'react'
import './index.css'
import { Hel } from './components/Hello'
import Form from './components/Form'


export default function App() {

  const soma = (a,b) => {
    return a+b
  }

  const [nome, setarNome] = useState('Nome exemplo')

  return (
    <div className="w-screen h-screen bg-zinc-700 p-3">
      helo world {soma(1,2)}
      <Hel idade={20} />
      <Form title={"NOME"} setarNome={setarNome} nome={nome} />
    </div>
  )
}