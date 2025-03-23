import { useEffect, useState } from 'react'
import Card from './Card'
import './css/RecipeBox.css'
function RecipeBox(){
    const [data, setData]= useState([])

useEffect(()=>{
    async function fetchData(){
        const res= await fetch("https://67cd35e2dd7651e464eda65e.mockapi.io/DraFlameFood")
        .then((response)=>response.json())
        .then((d)=>setData(d))
    }
    fetchData()
},[])

    return(
        
        <div className="cardList">
            {data.map((item)=>(
                <Card data={item}></Card>
            ))}
        </div>
    )
}
export default RecipeBox;