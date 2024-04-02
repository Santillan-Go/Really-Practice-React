import { useEffect, useState } from "react";
import  {useFetch}  from "../HOOKS/useFetch"




export  function HookPersonalizado(){


    let url="https://pokeapi.co/api/v2/pokemon";
    url="https://jsonplaceholder.typicode.com/users"

let {data,ispending,error}=useFetch(url)

    //console.log(useFetch())

    return(

        <>
        
        <h2>HOOKS PERSONALIZADOS</h2>
        
<h3>

        <pre  style={{whiteSpace:"pre-wrap"}}>


   <code>
         {JSON.stringify(data)}
    </code>

        </pre>
 
   </h3>
<h3>{JSON.stringify(ispending)}</h3>
<h3>{JSON.stringify(error)}</h3>
        </>
    )
}