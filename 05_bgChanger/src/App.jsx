import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
function App() {
 
const [color,setColor]=useState("olive");

const changeColor=(color)=>{
  setColor(color)
}

  return (
    <>
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
      <button className="outline-none px-2 py-1 rounded-2xl text-white shadow-large" style={{backgroundColor:"red"}} onClick={()=>changeColor("red")}>Red</button>
      <button className="outline-none px-2 py-1 rounded-2xl text-white shadow-large" style={{backgroundColor:"aqua"}} onClick={()=>changeColor("aqua")}>Aqua</button>
      <button className="outline-none px-2 py-1 rounded-2xl text-white shadow-large" style={{backgroundColor:"blue"}} onClick={()=>changeColor("blue")}>Blue</button>
      <button className="outline-none px-2 py-1 rounded-2xl text-white shadow-large" style={{backgroundColor:"yellow"}} onClick={()=>changeColor("yellow")}>Yellow</button>
      <button className="outline-none px-2 py-1 rounded-2xl text-white shadow-large" style={{backgroundColor:"Turquoise"}} onClick={()=>changeColor("Turquoise")}>Turquoise</button>
      <button className="outline-none px-2 py-1 rounded-2xl text-white shadow-large" style={{backgroundColor:"magenta"}} onClick={()=>changeColor("magenta")}>Magenta</button>
      </div>
    </div>
   </div>

    </>
  )
}

export default App
