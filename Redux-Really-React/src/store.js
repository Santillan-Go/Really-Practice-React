import {configureStore} from "@reduxjs/toolkit";

import {todoSlice} from "./features/todo/todoSlice";
import { counterSlice } from "./features/counter/counterSlice"; 

// CREAMOS EL CONFIGURESTORE, QUE ES BASICAMENTE EN DONDE SE ALMACENAN TODOS LOS ESTADOS


export const store = configureStore({
    reducer:{
        todos:todoSlice.reducer,
        counter:counterSlice.reducer
    }
  });


// store=> ARBOL DE ESTADOS

// reducer=> MANEJADOR DE ESTADOS


// USESELECTOR => OBTENER LOS DATOS DE LOS ESTADO


// USEDISPATCH=> EJECUTAR FUNCIONES PARA ACTUALIZAR EL ESTADO