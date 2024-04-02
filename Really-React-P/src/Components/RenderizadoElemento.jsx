import  React, {Component}  from "react";
import data  from "../helper/data.json"



function  Lista(props){



    return(

      <li  key={props.el.id}>


        <a href={props.el.web}>{props.el.name}</a>
      </li>
    )
}

export default class RenderizadoElemento  extends Component{

constructor(props){


    super(props);

    this.state={
        seasons:["Primavera", "verano", "Invierno", "Otoño"]
    }
}

render(){
console.log(data)
    return(
<>
<h2>
RENDERIZADO ELEMENTOS
</h2>


<h3>Estaciones del año</h3>
<ol>
{this.state.seasons.map((e,i)=>  <li  key={e}>{e}</li>)}

</ol>


<h3>FRAMEWORKS DEL FRONT-END</h3>

<ul>
{data.Frameworks.map((f,i)=> <Lista key={f.id} el={f}/>)}



</ul>


</>

    )
}
}