import React, { useReducer} from "react";

const initialState = { contador: 0 };

//BASICAMENTE PERMITE MODIFICAR EL ESTADO QUE SE TOMA POR DEFECTO, ESTE SE RECIBE COMO PARAMETRI OPCIONAL 
//EL HOOK USEREDUCER
const init=(initialState)=>{

  return {contador:initialState.contador+100}
}
//1 DECLARA TUS ACCIONES
const TYPES={
    INCREMENTAR:"INCREMEMTAR",
    DECREMENTAR:"DECREMENTAR",
    INCREMENTAR_5:"INCREMENTAR_5",
    DECREMENTAR_5:"DECREMENTAR_5",
    RESET:"RESET"
};

//CREAS TU FUNCION REDUCER(ESTADO, {OPCIONES})
//Y HACES TUS VALIDACIONES CON LA PROPIEDAD TYPE
function reducer(state, action) {


  //CADA CASO TIENE QUE RETORNA EL NUEVO VALOR DEL ESTADO
  //ADEMAS EN EL RETURN PUEDES TENER CIERTA LOGICA
  switch (action.type) {
    case TYPES.INCREMENTAR:{
      return { contador: state.contador+1 };
    }   case TYPES.INCREMENTAR:{
      return { contador: state.contador+1 };
    }
    case TYPES.DECREMENTAR: {
      return { contador: state.contador -1};
    }case TYPES.INCREMENTAR_5: {
        return { contador: state.contador + action.payload};
      }case TYPES.DECREMENTAR_5: {
        return { contador: state.contador - action.payload};
      }case TYPES.RESET: {
        return { contador: 0};
      }
    default:
      return state;
  }
}


export const Contador = () => {
// UTILIZA EL HOOK useReducer(funcion(con acciones), valor del stado inicial)
//
  const [state, dispatch] = useReducer(reducer, initialState,init);
//STATE/
//  DISPATCH(FUNCION QUE TE PERMITE PASAR LA ACCION QUE VA EJECUTAR ESTA RECIBE COMO PARAMETRO CON LA PROPIEDAD TYPE Y PAYLOAD)
  const sumar = () => dispatch({type:TYPES.INCREMENTAR,});

  const restar = () => dispatch({type:TYPES.DECREMENTAR,});

//TUS FUNCIONES TIENEN QUE UTILIZAR LA FUNCION DISPATCH PARA DECIR QUE FUNCION HARA
  const plus5=()=>dispatch({type:TYPES.INCREMENTAR_5,payload:50})
  const less5=()=>dispatch({type:TYPES.DECREMENTAR_5,payload:5})
  const reset=()=>dispatch({type:TYPES.RESET})


  return (
    <div>
      <h2>CONTADOR REDUCER</h2>

      <h2>{state.contador}</h2>

      <button onClick={sumar}>+</button>

      <button onClick={restar}>-</button>

      <button onClick={plus5}>+5</button>
      <button  onClick={less5}>-5</button>
      <button  onClick={reset}>reset</button>
    </div>
  );
};
