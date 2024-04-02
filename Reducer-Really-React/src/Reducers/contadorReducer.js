import { TYPES } from "../Action/contadorAction";




export const contadorinitialState = { contador: 0 };

//BASICAMENTE PERMITE MODIFICAR EL ESTADO QUE SE TOMA POR DEFECTO, ESTE SE RECIBE COMO PARAMETRI OPCIONAL 
//EL HOOK USEREDUCER
export const contadorinit=(initialState)=>{

  return {contador:initialState.contador+100}
}

//CREAS TU FUNCION REDUCER(ESTADO, {OPCIONES})
//Y HACES TUS VALIDACIONES CON LA PROPIEDAD TYPE
export function contadorReducer(state, action) {


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