import React, {Component} from "react";


class  Reloj  extends Component{
    constructor(props){
super(props)
    }
//DESMONTAJE
    componentWillUnmount(){
        console.log(3, "EL COMPONENTE HA SIDO ELIMINADO DEL DOM")
        
        
            }


    render(){

        return(
            <>
            <h3>{this.props.hora} </h3>
            
            </>
        )
    }
}

export default class CicloDeVida extends Component{

//MONTAJE
    constructor(props){

super(props);
//Mine
this.stopit=null;
this.temporizador=null;
this.state={
    Hora:new Date().toLocaleTimeString(),
    visible:false

}
// this.start=this.start.bind(this)
console.log(0,"EL COMPONENTE SE INICIALIZO  AUN NO ESTÁ EN EL DOM")
    }

//MONTAJE
    componentDidMount(){
        console.log(1, "EL COMPONENTE YA SE ENCUENTRE EN EL  DOM");
    }

    ///ACTUALIZACION
    componentDidUpdate(prevprops,prevState ){
        console.log(2, "EL ESTADO O LAS PROPS DEL COMPONENTE HAN CAMMBIADO")
    console.log(prevprops)
    console.log(prevState)
    }


  

tictac(){

    this.temporizador=setInterval(()=>{

        this.setState({
        
            Hora: new Date().toLocaleTimeString()
        })
        
               },1000)
}


    start=()=>{
     this.tictac()
     this.setState({
        visible:true,
     })
    }

    stop=()=>{
        clearInterval(this.temporizador)
        this.setState({
            visible:false,
         })
    }

// start(){
    
// this.stopit=setInterval(() => {
//     this.setState({
//         Hora:new Date().toLocaleTimeString()
//     })
// }, 1000);
  
//     }


    
// stop(){
    
//     clearInterval(this.stopit)
      
//         }

//MONTAJE Y ACTUALIZACION
render(){
console.log(4, "EL COMPONENTE SE DIBUJA O SE REDUBUJA")
    return(
<>

<h2>CICLO DE VIDA </h2>
{this.state.visible && <Reloj  hora={this.state.Hora}/>}

<button onClick={this.start}>INICIAR</button>
<button  onClick={this.stop}>DETENER</button>
</>

    )
}

}