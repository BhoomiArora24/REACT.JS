import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hooks

  let [counter, setCounter] = useState(15)// or any other value ex: function navya
//setCounter or any other name is a method that controls counter variable
  
  // let counter = 15;

  const addValue = () => {
    if(counter < 20){
      setCounter(counter+1);
    }
    else{
      alert("Counter can't be increased");
    }
  }

  const removeValue = () => {
    if(counter >0){
      setCounter(counter-1);
    }
    else{
      alert("Counter is already zero");
    }
  }

  return (
    <>
      <h1> Chai aur raect</h1>
      <h2>counter value: {counter}</h2>

      <button 
      onClick ={addValue}>add value{counter}</button>
      <br />
      <button 
      onClick = {removeValue}>remove value{counter}</button>

    </>
  )
}

export default App
