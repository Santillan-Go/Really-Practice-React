import React from "react";
import { useFormC } from "../Hooks/useFormC";

const initialForm = {
  name: "",
  lastname:"",
  age:"",
  first:"----",
man:false,
woman:false

};

const Validates = (form) => {
  let err = {};

  if (!form.name.trim()) {
    err.name = "Llena el campo name";
  }
  if(form.man===false&&form.woman===false){
    err.sexo = "Seleciona tu sexo";
  }

  if(form.lastname.length===0){
    err.lastname="Ingresa tu apellido"
  }


  if(form.age.length===0){
    err.age="Ingresa tu edad"
  }

  return err;
};
export const FormC = () => {
  const { form, handleChange, handleSubmit, errors,stop } = useFormC(
    initialForm,
    Validates
  );
let style={
    color:"red",
    padding:"1rem",
    fontWeight:"bold"

}
  return (
    <section  className="section-form">
      <form action="" onSubmit={handleSubmit}   className="formC">
       
       <label htmlFor="name">Nombre</label>
        <input
        id="name"
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
          placeholder="Escribe tu nombre"
        />

        {errors.name && <p style={style}>{errors.name}</p>}
<label htmlFor="lastname">Apellido:</label>
       <input type="text"id="lastname"   onChange={handleChange}  value={form.lastname} name="lastname" placeholder="Apellido"/>
       {errors.lastname&&<p  style={style}>{errors.lastname}</p> }

<label htmlFor="age">Edad:</label>
<input type="number" id="age"  onChange={handleChange}  value={form.age} name="age"/>
{errors.age&&<p  style={style}>{errors.age}</p> }
<label htmlFor="genre">Sexo</label>
<div >
    <label htmlFor="Mujer">Mujer</label>
<input type="radio" name="woman"  onChange={handleChange}   checked={form.woman}/>
<label htmlFor="Hombre">Hombre</label>
<input type="radio"  name="man" onChange={handleChange}     checked={form.man} />

</div>

{errors.sexo&&<p  style={style}>{errors.sexo}</p> }
{/* <label htmlFor="school">Nivel de estudios:</label>
<select name="school" id=""  onChange={handleChange}     value={form.school} >
<option value=""  name="first">----</option>
<option value="">primaria</option>
<option value="">secundaria</option>
<option value="">prepa</option>
<option value="">universidad</option>

</select> */}


        <input type="submit" value="Send"  className="sendC"/>
      </form>
    </section >
  );
};
