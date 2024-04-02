import React, {Component} from "react";

function Login(){
    return <button>Log in</button>
}

function LogOut(){
    return <button>Log  Out</button>
}



export default class RenderizadoCondicional  extends Component{


constructor(props){
super(props);
    this.state={
        session:true,
    };
}

render(){

    return(
        <>
        <h2>RENDERIZADO CONDICIONAL</h2>
        


{
  this.state.session
  ? <LogOut/>
  :<Login/>
}



        </>
    )
}

}