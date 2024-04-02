import { useState, useEffect } from "react";



function Reloj({hour}){


    return <h3>{hour}</h3>
   
}

export default  function RelojHook(){

const [Hour, setHour] = useState(new Date().toLocaleTimeString())
const [visible, setvisible] = useState(false);



//RECIBE 2 P=> FUNCION
//ARRAY[DEPENDENCIAS]=> SE EJECUTA EL EFECTO SOLO CUANDO HAY CAMBIOS EN EL ESTADO
useEffect(()=>{
let temporizador;


if(visible){
    temporizador=setInterval(() => {
        setHour(new Date().toLocaleTimeString())
    }, 1000);
}else{
 
    clearInterval(temporizador)

 
}

return()=>{
    console.log("FASE DE DESMONTAJE")
    clearInterval(temporizador)
}
//ARRAR[0]=> 1 VEZ DESPUES DEL MONTAJE
//ARRAY[!0]=> ACTUALIZAR EL COMPONENTE
},[visible])


    return(

        <>
        <h2>RELOJ CON HOOK</h2>
        

        {visible && <Reloj  hour={Hour}/>}

<button onClick={()=> setvisible(true)}>INICIAR</button>
<button  onClick={()=> setvisible(false)}>DETENER</button>
        </>
    )
}
