import React, { useState } from 'react'

const InputVal = () => {
    const [state,setState]=useState("")
    const [print,setPrint]=useState(false)

    const inputvalue=(e)=>{
        setState(e.target.value)
    }

  return (
    <div>
        <h1>Input Value Get </h1>

        <input type="text"  value={state} onChange={inputvalue}/>

        

        { print?<h1>hello Input {state}</h1>:null   }
            
       

        <button onClick={()=>setPrint(true)}>Click</button>


    </div>
  )
}

export default InputVal