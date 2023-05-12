import React, { useRef } from 'react'

const Unconolled = () => {
    const inputref=useRef()

    const submitform=(e)=>{
        e.preventDefault()
        console.log( "uncontrolled component ka value get krne ke liye ",inputref.current.value)
    }
  return (
    <div>
        <h1>Unconolled Componenet</h1>
        <form onSubmit={submitform}>

            <input type="text" ref={inputref} /> <br /><br />       {/*  ref jo useRef bind hai yhi uncontrolled hai */}
        
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Unconolled