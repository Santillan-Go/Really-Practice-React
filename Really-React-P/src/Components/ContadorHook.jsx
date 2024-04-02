import React,{useState} from 'react'


export  default function ContadorHook(props){


const [contador, setContador]=useState(0)

 const [check, setCheck]=useState(false)

const increase=()=>{
    setContador(
        contador+1
    )
}

const decrese=()=>{
    setContador(
        contador-1
    )
}


const change=()=>{
    setCheck(check=false)
}

return(
    <>
    <h2>HOOK-USESTATE</h2>
    <h3>{contador}</h3>

<p>Contador de {props.titulo}</p>
    <button onClick={increase}>+</button>
    <button onClick={decrese}>-</button>

    <button onClick={change}>{!check?"Activate":"Desativet"}</button>
    </>
)



};



ContadorHook.defaultProps={

    titulo:"CLICKS"
}