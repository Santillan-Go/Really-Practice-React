

import { useState } from 'react'
import './ESTILOS.css'

import modulestyles   from "./Estilos.module.css"


export default  function Estilos(){
    let mystyle={
        color:"blue",
        backgroundColo:"blue",
        boderRadius:"2rem",
        margin:"2rem auto" ,
        maxWidth:"50%"
    }

    return (
        <>
        <section className="estlos">
        
        <h2>ESTILOS CSS EN REACT</h2>

        <h3  className='bg-react'>ESTOS SON ESTILOS EN REACT</h3>
    
        <h3  className='bg-react'  style={{boderRadius:"1.25rem", margin:"1rem"}} >ESTILOS EN LINEA CON EL ATRIBUTOS REACT</h3>
        <h3  className='bg-react'  style={mystyle} >ATRIBUTOS REACT CON UNA VARIABLE</h3>
<h3 className="bg-react">
AGREGANDO NORMALIZA CON 
        <code>  @import-normaliza</code>
</h3>


<h3  className={modulestyles.error}  style={{boderRadius:"1.25rem", margin:"1rem"}} >ESTILOS CON MUDULOS </h3>
   
<h3  className={modulestyles.success}  style={{boderRadius:"1.25rem", margin:"1rem"}} >ESTILOS CON MUDULOS </h3>
   

<h3  className="bg-sass"  style={{boderRadius:"1.25rem", margin:"1rem"}} >ESTILOS CON SASS</h3>
   
        </section>
        
        </>
    )

}


