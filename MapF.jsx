import React from 'react'

const MapF = () => {
    const ankit = ["Ankit" ,"BCA", "Student"]     //ye Array pr Map function use hota 
  return (
    <div>
        <h1>Map Function </h1>
        {
            ankit.map((item)=>{
              <h1>{item}</h1>
            })
        }
    </div>
  )
}

export default MapF