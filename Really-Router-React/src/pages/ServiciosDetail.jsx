import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'

export const ServiciosDetail = ({servicios}) => {


const {id}=useParams();
// const  {idp,name,precio}=getservicios(id);
 const servicio=servicios.find(p=> p.id.toString()===id);
  return (
  <section >
<h1>DETALLES DEL Servicio </h1>


<h2>{servicio.name}</h2>
<p>{servicio.id}</p>
<p>{`$  ${servicio.precio}`}</p>



  </section>
  )
}
