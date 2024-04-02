


import React, { useEffect } from 'react'









export const SelectF = ({data,getMuni}) => {


const handleChange=(e)=>{

console.log()

getMuni(e.target.value);
}




  return (
    <div>




        <select name="" id="" onChange={handleChange}>

{data.map((el,i)=>  <option  key={i}>{el}</option>)}
        </select>
    </div>
  )
}
