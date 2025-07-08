import React from 'react'

function bar() {
  return (
    <div className="mt-130">
      <div className="flex p-8 gap-7 bg-amber-50 rounded-md mt-[130px]">
  <button onclick={() => setColor("Green")} className="bg-green-400 text-white px-4 py-2 rounded">Green</button>
  <button className="bg-blue-400 text-white px-4 py-2 rounded">Blue</button>
  <button className="bg-purple-300 text-white px-4 py-2 rounded">Lavender</button>
  <button className="bg-red-400 text-white px-4 py-2 rounded">Red</button>
  <button className="bg-black text-white px-4 py-2 rounded">Black</button>
  <button className="bg-amber-300 text-white px-4 py-2 rounded border ">Yellow</button>
</div>

    </div>
  )
}

export default bar
