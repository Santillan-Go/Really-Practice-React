import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';
export const Todos = () => {


  //USESELECTOR PARA TRAER LA DATA DE LOS
    const todos=useSelector((state)=> state.todos.todos);
    //USEDISPATCH => PARA  EJECUTAR UNA FUNCION 
const dispatch=useDispatch();
    console.log(todos)
  return (
    <>
        {todos.length>0&& todos.map(t=> 
          
           <div   key={t.id}>

<h2>{t.text}</h2>
            <button onClick={()=>dispatch(removeTodo(t.id))}>Delete</button>
           </div>
          )}



    </>
  )
}
