import React, { useContext, useEffect,useState } from 'react'
import CrudContext from '../Context/CrudContext'

const initialForm={

    name:"",
    id:null
}

export const CrudForm = ({}) => {

    const [form, setForm] = useState(initialForm)
  const {createData,updataData,dataToEdit,setDataToEdit}=useContext(CrudContext)

useEffect(()=>{
if(dataToEdit){
  setForm(dataToEdit)
}else{
  setForm(initialForm)
}




},[dataToEdit]);


  const handleChange=(e)=>{
    //EL FORM SE ACTUALIZA DESPUES DE ESTE CAMBIO
    //Y POR LO TANTO NO SE PASA NADA DE PRIMERA INSTANCIA
    //SINO DESPUES 
setForm({
    ...form,
  [e.target.name]:e.target.value
}
)
    
  }
  
  const handleSubmit=(e)=>{
  e.preventDefault();

  if(!form.name) {

  
    return    alert("Fill the fielda")
  }
if(form.id===null){
  createData(form)
}else{
  updataData(form);

}
handleReset()
}

const handleReset=(e)=>{
 setForm(initialForm)
setDataToEdit(null)
}
  
    return (
    <div>

<h3>{dataToEdit?"EDITAR":"AGREGAR"}</h3>
    <form onSubmit={handleSubmit}>

<input onChange={handleChange} value={form.name}  type="text"   name='name' placeholder='Name'/>

<input type="submit"  value={"Send"} />
<input  onClick={handleReset} type="reset"   value="Clean" />

    </form>
    
    </div>
  )
}
