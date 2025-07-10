import React from 'react'

function Bar({ setColor }) {
  return (
    
    <div className="flex p-8 gap-7 bg-amber-50 rounded-md mt-[130px]">
      <button onClick={() => setColor("green")} className="bg-green-400 text-white px-4 py-2 rounded">Green</button>
      <button onClick={() => setColor("blue")} className="bg-blue-400 text-white px-4 py-2 rounded">Blue</button>
      <button onClick={() => setColor("lavender")} className="bg-purple-300 text-white px-4 py-2 rounded">Lavender</button>
      <button onClick={() => setColor("red")} className="bg-red-400 text-white px-4 py-2 rounded">Red</button>
      <button onClick={() => setColor("black")} className="bg-black text-white px-4 py-2 rounded">Black</button>
      <button onClick={() => setColor("yellow")} className="bg-amber-300 text-white px-4 py-2 rounded border">Yellow</button>
    </div>
  )
}

export default Bar
