import React from 'react'

export const ProductoItem = ({data,addCar}) => {

let {id,name,price}=data;

  return (
    <div  style={{border:"thin solid", padding:"1rem",borderRadius:"10px",boxShadow:" 0 0  30px white"}}>
<h4>{name}</h4>
<h5>${price}.00</h5>
<button onClick={()=>addCar(id)}>Agregar</button>
   
    </div>
  )
}
