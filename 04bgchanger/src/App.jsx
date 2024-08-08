import { useState } from "react"


function App() { 
  const [color,setcolor]= useState("magenta")
  return (
    <div className="w-full h-screen duration-200 style" style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center bottom-6 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-slate-300 px-3 py-2 rounded-xl">

          <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"red"}}>Red</button>

          <button onClick={()=>setcolor("#FFF685")} className="outline-none px-4 py-1 rounded-full text-black " style={{backgroundColor:"#FFF685"}}>Yellow</button>

          <button onClick={()=>setcolor("#d0bdf4")} className="outline-none px-4 py-1 rounded-full text-black " style={{backgroundColor:"#d0bdf4"}}>Purple</button>

          <button onClick={()=>setcolor("#0f2862")} className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"#0f2862"}}>Blue</button>

          <button onClick={()=>setcolor("#ffb766")} className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"#ffb766"}}>Orange</button>

          <button onClick={()=>setcolor("#5cbdb9")} className="outline-none px-4 py-1 rounded-full text-white " style={{backgroundColor:"#5cbdb9"}}>Pista</button>
        </div>
      </div>
    </div>
  )
}

export default App
