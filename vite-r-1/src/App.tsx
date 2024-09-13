import React from 'react'
import './index.css'
import { Hel } from './components/Hello'


export default function App() {

  const some = (a,b) => {
    return a+b
  }

  return (
    <div className="w-screen h-screen bg-zinc-700 text-white p-3">
      helo world {some(1,2)}
      <Hel idade={20} />
    </div>
  )
}