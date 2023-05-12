import React, { useState } from "react"
import Props from "./Props"
const ClickEvent=()=>{
    const [clickevent , setClickevent]=useState(0)


return(
    <div>
        <Props clickitem={clickevent}/>
        <h1>Click Event </h1>
        <h3>Count </h3>
        <button onClick={()=>setClickevent(clickevent+1)}>Counter</button>
    </div>
)
}
export default ClickEvent