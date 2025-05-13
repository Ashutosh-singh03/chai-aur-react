import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
 let details={
  name:"Hitesh",
  age:24,
  roll:32
 }
  return (
    <>
     <h1 className='bg-green-400 text-black p-10   rounded-xl mb-8'>tailwind test</h1>
     <Card  channel="ChaiAurCode" btnText="Click me" />
     <Card channel="Hitesh" />
    </>
  )
}

export default App
