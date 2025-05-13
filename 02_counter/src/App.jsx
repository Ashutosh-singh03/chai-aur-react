import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(5);

 const addValue=() =>{
  // counter=counter+1;
 
    //  setCounter(counter+1);
    //  setCounter(counter+1);//if these all statement will same react will understand it same work and only do once
    //  setCounter(counter+1);
  setCounter(prevCounter=> prevCounter+1);
  setCounter(prevCounter=> prevCounter+1);
  setCounter(prevCounter=> prevCounter+1);
  setCounter(prevCounter=> prevCounter+1);
 
 }
 const removeValue=()=>{
  if(counter>0){
    counter=counter-1;
  setCounter(counter);
  }
  
 }
  return (
    <>
   <h1>chai aur react</h1>
   <h2>couter value: {counter}</h2>
 <button onClick={addValue}>Increase {counter}</button>
 <br />
 <button onClick={removeValue}>decrease {counter} </button>
    </>
  )
}

export default App
