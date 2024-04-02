import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

export const Carrer = () => {
  //OBTENEMOS LA DATA QUE SE PASÓ MEDIANTE LOADER
  //UTILIZANDO EL HOOK USELOADERDATA
 const carrer=useLoaderData()


  return (
    <div  className='carrers'>


{/* LISTA DE CARRERAS  => LINK */}

{carrer.map(ca=> <Link   to={`carrer/${ca.id}`}>{ca.name}</Link>) }

    </div>
  )
}


// loader function

export  const carrerData=  async()=>{
//PARAMPS => LA PROPIEDAD LOADER TIENE ACCESO AL OBJECTO PARAMS
const res= await fetch("")

  return res.json()
};