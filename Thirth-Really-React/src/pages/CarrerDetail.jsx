import React from 'react'
import { useLoaderData,Link } from 'react-router-dom'

export const CarrerDetail = () => {

    const carrers=useLoaderData();
  return (
    <div>

{carrers.map(carrer=> <Link   to={`${carrer.id}`} key={carrer.id}>{carrer.name}</Link>)}

        
    </div>
  )
}


const carrerDataDetail=async({params})=>{
const res= await fetch(`hhhhhh/${params.id}`)


//SI HAY ERRORRES USAMOS LA PROPIEDDA ERRORELEMENT PARA MOSTRAR EL COMPONENTE ERROR


if(!res.ok){
    throw Error("Error could  not find the carrer")}

return res.json()
}
