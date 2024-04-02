import React from 'react'
import { useForm } from '../Hooks/useForm'
import {Loader} from  "./Loader";
import {Messaje}  from "./Messaje"

const initialForm={

    name:"",
    email:"",
    subject:"",
    comments:""
};

const validationForm=(form)=>{
let error={};

let regexName=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
   regexEmail=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
   regexComment=/^.{1,255}$/;
if(!form.name.trim()){
    error.name="Este campo de nombre es requerido"
}else if(!regexName.test(form.name.trim())){
error.name="El campo name solo acepta letras y espacios en blanco"
}



if(!form.email.trim()){
  error.email="Este campo de  email  es requerido"
}else if(!regexEmail.test(form.email.trim())){
  error.email="Email invalido";
  }


if(!form.subject.trim()){
  error.subject="Este campo de  asunto es requerido"
}

if(!form.comments.trim()){
  error.comments="Este campo de comentario es requerido"
}else if(!regexComment.test(form.comments.trim())){
  error.comments="El limite es de 255"
  }


return error;
}
export const ContactForm = () => {
    




  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBluer,
    handleSubmmit,
  } = useForm(initialForm, validationForm);


 
  let style={
    fontWeight:"bold",
    color:"red"
  }
  return ( 
    <div>
      <form   className='formValidate'  action="" onSubmit={handleSubmmit}>
        <input
          type="text"
          value={form.name}
          placeholder="Escribe tu nombre"
          name="name"
          onBlur={handleBluer}
          onChange={handleChange}
          required
        />
        {errors.name  &&  <p  style={style}>{errors.name}</p>}
        <input type="email" 
        placeholder='Escribe tu email'
        
        value={form.email}
       
        name="email"
        onBlur={handleBluer}
        onChange={handleChange}
        required
        
        />
         {errors.email  &&  <p  style={style}>{errors.email}</p>}
       
        <input type="text"
        placeholder='Asunto a tratar'
        
        value={form.subject}
       
        name="subject"
        onBlur={handleBluer}
        onChange={handleChange}
        required
        
        />
         {errors.subject  &&  <p  style={style}>{errors.subject}</p>}
       

<textarea type="text"

        placeholder='Comentario'
        value={form.comments}
        name="comments"
        onBlur={handleBluer}
        onChange={handleChange}
        cols={50}
        rows={5}
        required
        
        />
   {errors.comments  &&  <p  style={style}>{errors.comments}</p>}
       

  <input type="submit"  value="Enviar" />
      </form>
      {loading&&<Loader/>}
      {response&& <Messaje  msg="Se enviaron  los datos"  bgColor="green"/>}
    </div>
  );
}
