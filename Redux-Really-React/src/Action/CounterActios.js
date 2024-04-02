import { DECREAMENT, INCREAMENT, RESTORE } from "../TYPES";



export const increment=()=>({type:INCREAMENT})
export  const decrement=()=>({type:DECREAMENT})

export const restore=()=>({type:RESTORE})