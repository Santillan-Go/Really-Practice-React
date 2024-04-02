import React,{useEffect,useState}  from "react";


export default function ScrollHooks(){

const [scrollY, setscrollY] = useState(0)
const [name, setName]=useState("jon")




useEffect(()=>{


    //console.log("FASE DE ACTUALIZACION");
    console.log("MOVEINDO EL SCROLL");

    const detectarSroll=()=> setscrollY(window.pageYOffset)


window.addEventListener("scroll",detectarSroll)

return ()=> { 
    window.removeEventListener("scroll", detectarSroll)

}
//ACTUALIZAR SOLO EN CAMBIOS DE EN EL STATE
},[scrollY]);

//FASE DE MONTAJE
useEffect(()=>{
    console.log("FASE DE MONTAJE");
    //SEGUNDO PARAMETRO=> CUANTAS VECES SE EJECUTARA EL EFFECT
    //LISTA DE DEPENDENCIAS
    //SOLO UNA VEZ
},[])



useEffect(()=>{
    console.log("FASE DE ACTUALIZACION");
    //SIN EL SEGUNDO PARAMTRO=>
    // ACTUALIZACION COMPONENTEDIDUPDATE
})
//DESMONTAJE
useEffect(()=>{
    console.log("FASE DE DESMONTAJE");

    return()=>{

    }
})
    return(

        <>
        <h2>HOOK-USEEFFECT Y EL CICLO DE VIDA</h2>
        
        <p>SCROLL Y DEL  NAVEGADOR  {scrollY}px</p>
        </>
    )
}








