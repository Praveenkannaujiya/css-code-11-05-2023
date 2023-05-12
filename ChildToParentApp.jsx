import React from 'react'
import ChildToParent from './ChildToParent'
const ChildToParentApp = () => {
    const clickbtn=(item)=>{
        console.log(item)
    }
  return (
    <div>
        <h1>Ye Parent Hai </h1>
        <ChildToParent/>
    </div>
  )
}

export default ChildToParentApp