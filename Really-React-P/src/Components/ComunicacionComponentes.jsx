import React, {Component} from "react";


// export default class ComunicacionComponentes  extends Component{




// }



export  default class Padre  extends Component {


    // constructor(props){

    //     super(props)

    //     this.state={

    //     }
    // }




    state={

contador:0
    }


    incrementar=(e)=>{
        this.setState({
                  contador: this.state.contador+1
                  })
    }

    //NECESITA EL CONTEXTO DEL PADRE=> BIND
// incrementarContador(){

//     this.setState({
//          contador: this.state.contador+1
//         })
        
    
// }


render(){

    return(
        <>
        <h2>COMUNICACION DE COMPONENTES</h2>
      <Hijo  mensaje="HOLA SOY UN HIJO"   incrementarContador={this.incrementar} contador={this.state.contador}   />
      <Hijo incrementarContador={this.incrementar} contador={this.state.contador}  mensaje="HOLA SOY UN HIJO 2"/>
        </>
    )
}

}


function Hijo({mensaje,incrementarContador, contador}){

    return(
<>

<h3>{mensaje}</h3>
<h4>{contador}</h4>
<button  onClick={incrementarContador}>INCREMENTAR</button>
</>

    )
}