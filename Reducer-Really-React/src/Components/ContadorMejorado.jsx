import { useReducer } from "react";

import { TYPES } from "../Action/contadorAction";
import { contadorReducer, contadorinit, contadorinitialState } from "../Reducers/contadorReducer";

export const ContadorMejorado = () => {
  // UTILIZA EL HOOK useReducer(funcion(con acciones), valor del stado inicial)
  //
  const [state, dispatch] = useReducer(contadorReducer, contadorinitialState, contadorinit);
  //STATE/
  //  DISPATCH(FUNCION QUE TE PERMITE PASAR LA ACCION QUE VA EJECUTAR ESTA RECIBE COMO PARAMETRO CON LA PROPIEDAD TYPE Y PAYLOAD)
  const sumar = () => dispatch({ type: TYPES.INCREMENTAR });

  const restar = () => dispatch({ type: TYPES.DECREMENTAR });

  //TUS FUNCIONES TIENEN QUE UTILIZAR LA FUNCION DISPATCH PARA DECIR QUE FUNCION HARA
  const plus5 = () => dispatch({ type: TYPES.INCREMENTAR_5, payload: 50 });
  const less5 = () => dispatch({ type: TYPES.DECREMENTAR_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div>
      <h2>CONTADOR MEJORADO REDUCER</h2>

      <h2>{state.contador}</h2>

      <button onClick={sumar}>+</button>

      <button onClick={restar}>-</button>

      <button onClick={plus5}>+5</button>
      <button onClick={less5}>-5</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
