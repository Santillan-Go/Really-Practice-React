import React,{useState} from 'react'
import { useDispatch } from 'react-redux'


import { addTodo,removeTodo } from '../features/todo/todoSlice'
export const AddTodos = () => {
const  [input, setInput]=useState();

const dispatch=useDispatch();


const  addToTask=(e)=>{

    e.preventDefault();
if(!e.target.task.value){
   alert("Fill the field");
   
    return;
}
console.log("saved")
    dispatch(addTodo(input));
    setInput("");
}


  return (
    <div>

<form  onSubmit={addToTask}>


    <input type='text'  value={input} onChange={(e)=>setInput(e.target.value)} name='task' placeholder='WHITE YOUR TASK'></input>
    <input   type='submit'  value="Add"></input>

</form>



    </div>
  )
}
