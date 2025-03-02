import { useState } from 'react'
import Header from './header'
import Footer from './Footer'
function Container(){
    return(
        <>
            <div className="wrapper">
        <Header></Header>
        <Footer></Footer>
            </div>
        </>
    )
}
export default Container