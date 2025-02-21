import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [Password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [noallow, setNoallow] = useState(false)
  const [charallow, setCharallow] = useState(false)

  const genPass = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(setNoallow) {
      str+="0123456789"
    }
    if(setCharallow) {
      str+="!@#$%^&*()_+-=[]{}|;:',.<>?/`~"
    }

    for(let i=1;i<=array.length;i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char)
    }

    setPassword(pass)
  },[length, noallow, charallow, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        test
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1 '>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1 '>
            <input type="checkbox" id='numberInput' defaultChecked={noallow} className='cursor-pointer' onChange={()=>{setNoallow((prev) => !prev)} }/>
            <label htmlFor='numberInput'>Numbers</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
