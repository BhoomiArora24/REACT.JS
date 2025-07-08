import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
// creating a state variable called count with an initial value of 0, and you are also getting a function called setCount that you’ll use to update that state.

//   Part--	Meaning
// useState(0)--	A React Hook that gives you state in a function component. Starts at 0.
// [count, setCount]--	Array destructuring. You're pulling two things out of useState:
// count--	The current value of the state.
// setCount--	A function you call to update count.
// const--	You’re declaring these two with const because you won’t reassign them directly.
let myObj = {
  name: 'John',
  age: 30
}

let newArr = [1,2,3];

  return (
    <>
{/* <> these are called fragments</> */}
      <h1 className="bg-green-400">Test</h1>
          <Card username ="Chai aur Code" btnText="Clickme" />
          
    </>
  )
}

export default App
