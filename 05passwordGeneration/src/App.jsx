import { useState, useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [chAllowed, setch] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (chAllowed) str += "!@#$%^&*(){}[]"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, chAllowed])

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },
  [password])


  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, chAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 size-30 h-35 text-orange-500 bg-gray-700">
        <h1 className='text-white text-center text-2xl my-6'>Password Generator</h1>
        <div className='flex shadow rounde-lg overflow-hidden mb-4 bg-amber-50 '>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 '
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordtoClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}/>
            <label>Number</label>


          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={chAllowed}
            id="chInput"
            onChange={() => {
              setch((prev) => !prev);
            }}/>
            <label>Character</label>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default App
