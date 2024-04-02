
import React,{Component} from "react";


function Pokemon(props){

return(
    <>
    
    <figure >
<img  src={props.avatar}  alt={props.name}></img>


     <figcaption>{props.name}</figcaption>   
    </figure>
    </>
)
}


export class AjaxApi  extends  Component{


state={
    pokemons:[]
}

componentDidMount(){

   let url="https://pokeapi.co/api/v2/pokemon";

    fetch(url)
    .then(res=> res.ok?res.json():Promise.reject(res))
    .then(json=>{
      //  console.log(json);

json.results.forEach((el,i)=>{
    fetch(el.url)
    .then(res=> res.json())
    .then(json=>{ 
   //    console.log(json.id);
        let pokemon={
            avatar:json.sprites.front_default,
            name:json.name,
            id:json.id
            
        };
//console.log(pokemon.name)
        // let pokemons=[...this.state.pokemons, pokemon];
        // this.setState({
        //     pokemons
        // });

    })

})


        // for(let i=0; i<json.results.length;i++){
        //     let url=json.results[i].url;
        //     fetch(url)
        //     .then(res=> res.json())
        //     .then(json=>  console.log(json))
        // }

    })
  
    .catch(err=>{
        console.log(err)
    })
}




render(){


    return(
        <>
        
        <h2>PETICIONES ASINCRONAS EN COMPONENTES  DE CLASES</h2>
        
{this.state.pokemons.map(el=> <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}

        </>
    )
}

}

