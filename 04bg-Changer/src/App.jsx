import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bar from './components/bar'

function App() {
  const [count, setCount] = useState("olive")

  return (
    <>
    
      <Bar/>
    </>
  )
}

export default App
