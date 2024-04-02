import React, { useReducer } from 'react'
import { shoppingReducer, shoppinginitialState } from '../Reducers/shoppingReducer'
import { TYPES } from '../Action/shoppingAction'
import { ProductoItem } from './ProductoItem'
import { CarProductoItem } from './CarProductoItem'

export const ShoppingCar = () => {


const [state, dispatch] = useReducer(shoppingReducer, shoppinginitialState)


const {producto,car}=state;
//FUNCIONES 

const addCar=(id)=>{
  dispatch({type:TYPES.ADD_TO_CAR, payload:id})


}
const delFromCar=(id)=>{
dispatch({type:TYPES.REMOVE_ONE_FROM_CAR, payload:id});

}

const deleteAllFromCar=(id)=>{
dispatch({type:TYPES.REMOVE_ALL_FROM_CAR, payload:id});

}

const clearCar=()=>{
  dispatch({type:TYPES.CLEAR_CAR})
}

  return (
    <div>

     

        <h2>CARRITOS DE COMPRAS</h2>

        <h3>PRODUCTOS</h3>
        <article className='box'>
{producto.map(p=><ProductoItem  key={p.id} data={p}  addCar={addCar}/>)}

        </article>

        <h3>CARRITO</h3>
        {car.length>0&& <h5>{`TOTAL:${car.length}`}</h5>}
        <article className='box'>
{car.map((c,i)=><CarProductoItem key={i} data={c}  deleteP={delFromCar}  deleAllFromCar={deleteAllFromCar}/>)}


        </article>
        <button onClick={clearCar}>Limpiar Carrito</button>
    </div>
  )
}

