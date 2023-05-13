import React from 'react'
import About from '/about'
import Navbar from '/navbar'
import Page404 from '/page404'
import { BrowserRouter, Routes, Route }  from "react-router-dom"


const Routing = () => {
    return (
        <>
            <BrowserRouter>

            <Navbar/>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/*' element={<Page404 />} />        

                </Routes>

            </BrowserRouter>
        </>
    )
}

export default Routing