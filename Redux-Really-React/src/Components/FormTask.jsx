import React, { useEffect, useState } from 'react'
import {addToTask}  from "../FEATURE-S"
import { useDispatch, useSelector } from 'react-redux'
export const FormTask = () => {


const dispatch=useDispatch();
const [input,setInput]=useState("")
const edittask=useSelector(state=> state.todos.edit);

const [edit, setEdit]=useState(null);

useEffect(()=>{
setInput(edittask.task)
setEdit(edittask)

},[edittask])
const handleChange=(e)=>{
let value=e.target.value;

setInput(value);
}

const handleSubmit=(e)=>{
  e.preventDefault();
let task=e.target.task.value;

if(!task)  return;
if(edit){
   dispatch(addToTask({...edit, task:task}));
   setEdit(null)
 
}else{
  dispatch(addToTask(input));
}

setInput("")
}


const style={

width:"400px",
height:"90px",
backgroundColor:"red",
padding:"1rem",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
gap:"1rem",
margin:"0 auto"
}
  return (
    <form  style={style}  onSubmit={handleSubmit}>

<input type="text" value={input} onChange={handleChange} name='task' placeholder='Weite your task' />

<input type="submit"  value="save" />

    </form>
  )
}
