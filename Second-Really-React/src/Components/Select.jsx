


import React from 'react'

export const Select = ({data}) => {
  return (
    <div>




        <select name="" id="">

{data.map((el,i)=>  <option  key={i}>{el}</option>)}
        </select>
    </div>
  )
}
