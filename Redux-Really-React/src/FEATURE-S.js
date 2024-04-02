import { createSlice,nanoid } from "@reduxjs/toolkit";

//ESTADO INICIAL=> PROPIEDAD DEL CREATESLICE
const initialState={
    todos:[],
    edit:""
};

//ESTA RECIBE COMO PROPIEDADEA =>
// NAME
// initialState
// REDUCERS


const todoSlice=createSlice({

name:"todos",
initialState,
reducers:{
    addToTask:(state, action)=>{

        if( typeof action.payload === "object"){
            
let uptask=action.payload;

const update=state.todos.map(t=>  t.id===uptask.id?uptask:t)

state.todos=update;
        }else{
let task={
    id:nanoid(),
    task:action.payload
}


state.todos.push(task)

        }





    },
    editToTask:(state, action)=>{
let editTask= action.payload;
state.edit=editTask;
console.log(editTask )
console.log("im editing")
        
    },
    deleteToTask:(state, action)=>{
let newtasks=state.todos.filter(t=>t.id!=action.payload);

state.todos=newtasks;

    }
     

}



})



export const {addToTask, deleteToTask,editToTask}=todoSlice.actions;


export {todoSlice};


