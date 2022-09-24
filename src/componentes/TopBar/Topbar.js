import React from 'react'
import './index.css'

export default function Topbar() {
 let Techniques = ["Bubble sort", "Selection sort", "Insertion sort", "merge sort", "Quick sort", "Counting sort", "Radix sort", "Bucket Sort", "Heap sort", "Shell sort"]
 return (
  <div className="containerOfSort">
   
    {Techniques.map((value) => {
     return (
      
       <button>
        {value}
       </button>
      
     )
    })}



  </div>
 )
}
