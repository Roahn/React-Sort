import React from 'react'
import './index.css'
export default function Display() {

 let arr =[9,8,7,6,5,4,3,2,1]
  return (
   <div className="containerOfDisplay">

     {arr.map((value)=>{
       return(
        <div style={{color:"white" ,height:`${10*value}px`,backgroundColor:"black"}}>{value}</div>)
     })}
      Display
    </div>
  )
}

