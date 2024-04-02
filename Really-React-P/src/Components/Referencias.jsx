import React,{createRef,useRef}  from "react";




export default function Referencias(){

///UTILIZAR REFERRNCIAS PARA NO USAR STATE=>
//Y POR ENDE NO ES NECESARIO REMDERIZAR EL COMPONENTE
//UN COMPONENET NO PUEDE RECIBIR COMO PROPS UN => REF
    let refmenu=useRef(),
     refMenuBtn=useRef();


     console.log(refMenuBtn, refmenu)
const  handlemenu=(e)=>{
    
    // const $menu=document.querySelector("#menu");


// if(e.target.textContent==="Menu"){
//     e.target.textContent="Cerrar"
//     $menu.style.display="block"
// }else{
//     e.target.textContent="Menu"
//     $menu.style.display="none" 
// }




if(refMenuBtn.current.textContent==="Menu"){
    refMenuBtn.current.textContent="Cerrar"
    refmenu.current.style.display="block"
}else{
    refMenuBtn.current.textContent="Menu"
    refmenu.current.style.display="none" 
}



}

    return(

        <>
        
        <h2>REFERENCIAS DEL DOM</h2>



        <button ref={refMenuBtn}   onClick={handlemenu} >CERRAR</button>

<nav ref={refmenu} style={{display:"none"}}>

<a href="#">Session 1</a>
<br />
<a href="#">Session 2</a>
<br />
<a href="#">Session 3</a>
<br />
<a href="#">Session 4</a>
<br />
<a href="#">Session 5</a>
<br />
</nav>

        </>
    )
}