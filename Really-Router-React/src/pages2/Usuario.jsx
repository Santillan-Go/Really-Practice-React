import React from 'react'
import { useParams } from 'react-router-dom'

export const Usuario = () => {

let {username}=useParams();
console.log(useParams())


  return (
    <div>



        <h3>PERFIL DE USUARIO</h3>
        <p>NOMBRE:{username.toLocaleUpperCase()}  </p>
    </div>
  )
}
