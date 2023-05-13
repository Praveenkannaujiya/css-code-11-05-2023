import React from 'react'

const MapObject = () => {
    const data=[
        {user:"Praveen",email:"praveen@gmail.com",contact:9988776655},     //ye Array ke under object pr map function use ho rha hai
        {user:"Ankit",email:"ankit555@gmail.com",contact:8899774455},
        {user:"Akash",email:"akash69@gmail.com",contact:8866594758}
    ]
  return (
    <div>
       <h1>map Function obejct </h1>
       <table>
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
        </tr>
       {
        data.map((item)=>{
            <tr>
                <td>{item.user}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
            </tr>
        })
       }
       </table>
    </div>
  )
}

export default MapObject