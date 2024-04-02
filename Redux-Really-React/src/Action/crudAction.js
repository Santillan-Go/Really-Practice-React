import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, UPDATE_DATA } from "../TYPES";


export const createAction=(data)=>({type:CREATE_DATA,payload:data})



export const raedAllAction=(data)=>({type:READ_ALL_DATA,payload:data})


export const updateAction=(data)=>({type:UPDATE_DATA,payload:data})


export const deleteAction=(id)=>({type:DELETE_DATA,payload:id})


export const noAction=(data)=>({type:NO_DATA,payload:data})






