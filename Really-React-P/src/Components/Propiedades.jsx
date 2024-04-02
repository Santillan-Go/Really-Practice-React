
export default function  Propiedades({componenteReact,name, boolean, numero, cadena, array, object1, funcion, numbers}){
    


return(

    <>
    <h2>PROPIEDADES</h2>
    
<p>{name}</p>

<ul>

<li>{cadena}</li>
<li>{numero}</li>
<li>{boolean?"true":"false"}</li>
<li>{array.join(", ")}</li>
<li>{object1.nombre}</li>
<li>{funcion(4)}</li>
<li>{numbers.map(n=> funcion(n)).join(", ")}</li>
</ul>

{componenteReact}


    </>
)


}


Propiedades.defaultProps={
    name:"Unknown"
}

Propiedades.prototype={
    
}