import React from 'react'

const Mapfunction = () => {
    const user=[
        {name:"Deny", class:"BCA", subject:"Computer Science" },
        {name:"Akash", class:"BA", subject:"Art  Science" },
        {name:"Abdullah", class:"D-Pharma", subject:" Bio Science" },
    ]

  return (
    <>
    <table>
    <tr>
                <td>Name</td>
                <td>Class</td>
                <td>Subject</td>
  </tr>
    {
        user.map((item ,i)=>{
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.class}</td>
                <td>{item.subject}</td>
            </tr>
        })
    }
</table>
    </>
  )
}

export default Mapfunction