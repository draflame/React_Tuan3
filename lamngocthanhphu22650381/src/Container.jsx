import { useState } from 'react'
import Header from './header'
import Footer from './Footer'
import RecipeBox from './RecipeBox'
import './css/Container.css'
function Container(){
    return(
        <>
            <div className="wrapper">
                <Header></Header>
                <RecipeBox></RecipeBox>
                <Footer></Footer>
            </div>
        </>
    )
}
export default Container