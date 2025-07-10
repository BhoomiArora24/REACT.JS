import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bar from './components/bar'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
     <div style={{ backgroundColor: color, height: "100vh" }}>
      <Bar setColor={setColor} />
    </div>
    </>
  );
}

export default App