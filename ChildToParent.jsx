import React from 'react'

const ChildToParent = (props) => {
    const data ={name:"praveen", email:"pra@gmail.com"}
  return (
    <div>
        <h1>Child To Parent data Transfer </h1>
        <h2>Child Component</h2>

        <h3>AAP kaa Name </h3>
        <button onClick={()=>props.clickbtn(data)}>click</button>
    </div>
  )
}

export default ChildToParent