import { useState } from "react"


function App() {
 
const [color , setColor]=useState("green")

  return (
   <>
<div className="w-20% h-screen duration-200 " style={{backgroundColor:color}}>

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
<button   
onClick={() => setColor("black")} className="outline-none px-4 py-4 rounded-full" style={{backgroundColor:"blue"}}>
  Blue
</button>

<button 

onClick={() => setColor("orange")} 

className="outline-none px-4 py-4 rounded-full" style={{backgroundColor:"red"}}>
  Red
</button>


<button  onClick={() => setColor("green")}  className="outline-none px-4 py-4 rounded-full" style={{backgroundColor:"yellow"}}>
  Yellow
</button>

</div>

</div>

</div>
   </>
  )
}

export default App
