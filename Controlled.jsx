import React, { useState } from 'react'

const Controlled = () => {
    const [state,setState]=useState("")
  return (
    <div>
        <h1>Controlled</h1>
        <p>Controlled Componenet State Ke through Handle Hota hai</p> 
        <p>{state}</p>

        <input type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
    </div>
  )
}

export default Controlled