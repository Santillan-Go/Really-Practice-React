import React,{Component}   from "react";
import { render } from "react-dom";





//PROPERTIES INITIALICER
//EXTEND => HERENCIA A OTRO OBJETO  => SUPER(PROPIEDADES)
export  class EventoES7  extends Component{

 //SIN NECESIDAD DEL CONTRUCTOR YA QUE UTILIZAMOS ARROW FUNCTIONS, LA
 // CUAL SU CONTEXTO SE BASE EN EL OBJECTO PADRE, => CLASS EVENTO ES7
    
 //STATE OBJETO EN DONDE SE ALMACENAN VARIABLES DE UM COMPONENTE PADRE O HIJO
 state={
            count:0,
        }
  
    
//ARROW FUNCTION
//THIS=> CONTEXTP PADRE
    suma=(e)=>{
        console.log("sumando")
     //SETSTATE ES UN METODO
     console.log(this)

     //SETSTATE ES UN METODO,QUE RECIBE COMO PARAMETRO UN OBJETO
     //SETSTATE TE HACE UNA COPIA DE STATE


        this.setState(
    
            {
                count:this.state.count+1
            }
        )
      
    
    }
    
    resta =(e)=>{
    
     
        this.setState(
    
            {
                count:this.state.count-1
            }
        )
    }
    
    
    
    
    
    
    
    render(){
    
        return( <>
        
        <h2>EVENTOS DE COMPONENTES DE CLASE ES7</h2>
    <h3>{this.state.count}</h3>
    
    <button onClick={this.suma} >decremento</button>
    <button  onClick={this.resta}  >incremento</button>   
    
    
        </>)
    }
    
    
    
    
    }


export  class EventoES6  extends Component{

constructor(props){
    super(props)

    this.state={
        count:0,
    }
    //LE PASAMOS EL THIS A SUMA PARA QUE HAGA REFERENCIA A ESTE CONTEXTO
    //HACERLO EN EL CONTRUCTOR
this.suma=this.suma.bind(this);
this.resta=this.resta.bind(this);
}

suma(){
    console.log("sumando")
 //SETSTATE ES UN METODO
 console.log(this)
    this.setState(

        {
            count:this.state.count+1
        }
    )
  

}

resta(){

 
    this.setState(

        {
            count:this.state.count-1
        }
    )
}







render(){

    return( <>
    
    <h2>EVENTOS DE COMPONENTES DE CLASE   ES6</h2>
<h3>{this.state.count}</h3>

<button onClick={this.suma} >decremento</button>
<button  onClick={this.resta}  >incremento</button>   


    </>)
}




}




//EXPRESADO
const Button=({funcion})=> <button onClick={funcion} >BOTÓN COMPONENTE</button>;

//DECLARADO
//function Button(){
//alert("hi")
//}


export class MasSobreEventos extends Component{


handleClick=(e, msg)=>{
console.log(e)
console.log(e.nativeEvent)

console.log(msg)
}
    render(){


        return(

            <>
            <h2>MÁS SOBRE EVENTOS</h2>
            
            <button onClick={(e)=>this.handleClick(e,"MESANJE DESDE EL EVENTO")}>SALUDAR</button>
          
          {/* EVENTO PERSONALIZADO */}
           <Button  funcion={(e)=>  this.handleClick(e,"COMPONENTE BTN")}></Button>
           
            </>
        )
    }


};

