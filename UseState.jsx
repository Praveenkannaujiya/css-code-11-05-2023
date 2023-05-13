import React, { useState } from 'react'

const UseState = () => {
    const [count , setCount ]=useState(10)
  return (
    <div>
        <h1>State is Object  state is update hota hai variable update nhi hota hai</h1>
        <h2>Count Number {count} </h2>
        <button onClick={()=>setCount(count+1)}>Update </button>
    </div>
  )
}

export default UseState