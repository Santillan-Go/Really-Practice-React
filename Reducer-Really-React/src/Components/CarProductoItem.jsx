import React from 'react'

export const CarProductoItem = ({data,deleteP,deleAllFromCar}) => {
 let {name,price,id,quatity}=data;
 
 let count=quatity;
  return (
    <div>


<h4>{name}</h4>
<h5>${price}.00</h5>
<h5>${price*count}</h5>
<button onClick={()=>deleteP(id)}>Borrar 1</button>
<button onClick={()=>deleAllFromCar(id)}>Borrar Todos</button>

   {count===0?"":<h6>{`${count} ${count==1&&"articulo"||count>1&&"articulos"}`}</h6>}

    </div>
  )
}
