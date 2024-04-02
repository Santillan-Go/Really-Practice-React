import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Productos = () => {

    console.log(useLocation())



        let {search}=useLocation(),
        //EL OBJECTO URLSEARCH TE DA LAS VARIABLES QUE SE ENCUENTRAN EN LA URL DEL NAVEGADOR
         query=  new URLSearchParams(search);

const LIMIT=20;
//SE UTILIZAN LOS GET ´PARA OBTENER LOS VALORES DE LAS VARIABLES
        let  start=parseInt(query.get("inicio"))||1,
        end=parseInt(query.get("fin"))||20;
        console.log(start, end)

        //USEHISTORY => USENAVIGATE
        //TE 
        let history=useNavigate();

        console.log(useNavigate(1))

        const handleprev=()=>{
            
history({search:`?inicio=${(start -LIMIT)<0?101:(start -LIMIT)}&&fin=${(end-20)===0?120:(end-20)}`})
    
        };
        const handlenext=()=>{


history({search:`?inicio=${(start +LIMIT)>101?1:(start +LIMIT)}&&fin=${  (end+20)>120?20:(end+20)  }`})
        };

  return (
    <div>

<h2>PRODUCTOS</h2>

<p>Mostrando productos del <b>{start}</b > al <b>{end}</b >  </p>



<button  onClick={handleprev}>BACK</button> 
<button    onClick={handlenext}>NEXT</button>
    </div>
  )
}
