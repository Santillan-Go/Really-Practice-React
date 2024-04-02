import  React,{useState}  from "react";


// export default   function Formulario(){

// const [nombre, setNombre]=useState("");
// const [sabor, setSabor]=useState(false);
// const [lemguaje, setLegnuaje]=useState("");
// const [terminos, setTerminos]=useState(false);

// const handleSubmit=(e)=>{
//    e.preventDefault()
//    alert("sending")
// }

// //console.log(nombre)
//  return(

//     <>
    
//     <h2>FORMUALRIOS</h2>

//     <form action="" onSubmit={handleSubmit}>

// <label htmlFor="nombre"> NOMBRE </label>

// <input type="text"id="nombre"
//  name="nombre" 
//   value={nombre}
//   onChange={(e)=> setNombre(e.target.value)}
  
//   />

  
//   <p>ELEGE TU SABOR JS FAVORITO</p>
   
//    <input type="radio"
//     id="vanilla"  name="sabor" 
//      value="vanilla"  
//      onChange={(e)=>setSabor(e.target.value)}
//      defaultChecked
//      />
//    <label htmlFor="vanilla">VANILLA JS</label>

//    <input type="radio" id="react"  name="sabor"  value="react"  onClick={(e)=>setSabor(e.target.value)}/>
//    <label htmlFor="react">React</label>

//    <input type="radio" id="angular"  name="sabor"  value="angular"  onChange={(e)=>setSabor(e.target.value)}/>
//    <label htmlFor="">Angulae</label>

//    <input type="radio" id="vue"  name="sabor"  value="vue"  onChange={(e)=>setSabor(e.target.value)}/>
//    <label htmlFor="">Vue</label>

//    <input type="radio" id="svelte"  name="sabor"  value="svelte"  onChange={(e)=>setSabor(e.target.value)}/>
//    <label htmlFor="">Sevelte</label>

// <p>ELIGE TU LENGUAAJE DE PROGRAMACION FAVORITO</p>
 
//  <select name="lenguaje" onChange={(e)=>setLegnuaje(e.target.value)} defaultValue="" >
// <option value="">-----</option>
// <option value="JS">JAVASCRIPT</option>
// <option value="PY">PYTHON</option>
// <option value="PHP">PHP</option>
// <option value="GO">GO</option>
// <option value="RB">RUBY</option>

//  </select>


//  <br />

//  <label htmlFor="terminos">ACEPTO TERMINOS Y CONDICIONES</label>
//  <input type="checkbox" id="terminos" name="terminos"  onChange={(e)=>setTerminos(e.target.checked)}/>
//   <input type="submit" />
//     </form>
//     </>
//  )   
// }


export default   function Formulario(){

  const [form, setForm]=useState({});
  
   const handleSubmit=(e)=>{
      e.preventDefault()
      alert("sending")
   }

   const handleChange=(e)=>{
setForm({
   //SPREAD OPERATOR RECOORRER ELEMENTOS DEL OBJECTO
...form,
//CREA UN PROPIEDAD=> DESTRUTURACION
[e.target.name]:e.target.value,
})
   }

   
   const handleCheked=(e)=>{
      setForm({
      ...form,
      [e.target.name]:e.target.checked,
      })
         }
   
   //console.log(nombre)
    return(
   
       <>
       
       <h2>FORMUALRIOS</h2>
   
       <form action="" onSubmit={handleSubmit}>
   
   <label htmlFor="nombre"> NOMBRE </label>
   
   <input type="text"id="nombre"
    name="nombre" 
    //SE CONCECTA A LA PROPIEDAD NOMBRE DEL FORM 
     value={form.nombre}
     onChange={handleChange}
     
     />
   
     
     <p>ELEGE TU SABOR JS FAVORITO</p>
      
      <input type="radio"
       id="vanilla"  name="sabor" 
        value="vanilla"  
        onChange={handleChange}
        defaultChecked
        />
      <label htmlFor="vanilla">VANILLA JS</label>
   
      <input type="radio" id="react"  name="sabor"  value="react"  onChange={handleChange}/>
      <label htmlFor="react">React</label>
   
      <input type="radio" id="angular"  name="sabor"  value="angular"  onChange={handleChange}/>
      <label htmlFor="">Angulae</label>
   
      <input type="radio" id="vue"  name="sabor"  value="vue"  oonChange={handleChange}/>
      <label htmlFor="">Vue</label>
   
      <input type="radio" id="svelte"  name="sabor"  value="svelte"  onChange={handleChange}/>
      <label htmlFor="">Sevelte</label>
   
   <p>ELIGE TU LENGUAAJE DE PROGRAMACION FAVORITO</p>
    
    <select name="lenguaje" onChange={handleChange} defaultValue="" >
   <option value="">-----</option>
   <option value="JS">JAVASCRIPT</option>
   <option value="PY">PYTHON</option>
   <option value="PHP">PHP</option>
   <option value="GO">GO</option>
   <option value="RB">RUBY</option>
   
    </select>
   
   
    <br />
   
    <label htmlFor="terminos">ACEPTO TERMINOS Y CONDICIONES</label>
    <input type="checkbox" id="terminos" name="terminos"  onChange={handleCheked}/>
     <input type="submit" />
       </form>
       </>
    )   
   }