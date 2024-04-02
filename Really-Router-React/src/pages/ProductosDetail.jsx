import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'

export const ProductosDetail = ({productos}) => {
const navigate=useNavigate();
function hlandleBack(){
navigate(-1)
}

const {id}=useParams();
// const  {idp,name,precio}=getProductos(id);
 const producto=productos.find(p=> p.id.toString()===id);
  return (
  <section >
<h1>DETALLES DEL PRODUCTO </h1>


<h2>{producto.name}</h2>
<p>{producto.id}</p>
<p>{`$  ${producto.precio}`}</p>


<button onClick={hlandleBack}>Back</button>
  </section>
  )
}
