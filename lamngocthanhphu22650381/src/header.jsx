import { useState } from 'react'
import './css/header.css'
import chefify from './assets/img/chefify.png'
import check from './assets/img/check.png'
import avtatar from './assets/img/avatar.png'
function Header(){
    return(
        <>
        <div className="container">
            <img src={chefify} alt="" />
            <input type="text" placeholder='What would you liek to cook?' />
            <ul className='menu'>
                
                <li><a href="#">What to cook</a></li>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">Ingredigents</a></li>
                <li><a href="#">Occasionns</a></li>
                <li><a href="#">About us</a></li>
            </ul>
            <div className="avt-wrapper">
                <div className="box">
                <img src={check} alt="" />
                <span>Your Recipe Box</span>
            </div>
            <img src={avtatar} alt="" />
            </div>
            
        </div>
        </>
    )
}
export default Header