import React,{Component} from "react";


//STATE, DONDE SE PUEDEN ALMACENAR VARIABLES DE UN COMPONENTE
//ESTA NO SE PUEDE MODIFICAR DE MANETA DIRECTA

function  EstadoAHijo({contadorHijo}){
    return (
        <>
        
        <h3>{contadorHijo}</h3>
        </>
    )
}



export default  class  Estado  extends Component{
constructor(props){
super(props);


this.state={

contador:0,
}
// };
// setInterval(()=>{

// //
//     this.setState({
//         contador: this.state.contador+1
//     })
// },1000)
}


    render(){
    return(
        <>
        <h2>ESTADO</h2>
        <p>{this.state.contador}</p>
        <button  >COUNT</button>
        <EstadoAHijo contadorHijo={this.state.contador} />
        </>
    )
}


// changeState(){
// this.setState()
// }

}