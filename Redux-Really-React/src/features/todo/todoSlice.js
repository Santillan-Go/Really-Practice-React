import { createSlice,nanoid } from "@reduxjs/toolkit";



const initialState={
    todos:[],
};

// USAMOS EL CREATESLICE PARA CREAR UN ESTADO, QUE ESTA MISMA RECIBE COMO PARAMETRO UN OBJECTO
// QUE TIENE COMO PROPIEDADES EL ESTADO INICIAL, SUS FUNCIONES, Y EL NOMBRE DE DICHO ESTADO

const todoSlice=createSlice({

    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
         
const todo={
    id:nanoid(),
    text:action.payload
}

state.todos.push(todo)

        },

        removeTodo:(state, action)=>{
const newData=state.todos.filter(t=> t.id!=action.payload);


state.todos=newData;
        }
    }
});


//SON LAS ACCIONES DEL ESTADO
export  const {addTodo, removeTodo}=todoSlice.actions;

// ESPORTAMOS EL SLICE PORQUE EL STORE EN SU PROPIEDAD REDUCER
// RECIBIRA COMO VALOR EL ESTADO.REDUCER
export { todoSlice}