import { TYPES } from "../Action/shoppingAction";

export  const shoppinginitialState = {
  producto: [
    
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 100 },
    { id: 3, name: "Producto 3", price: 100 },
    { id: 4, name: "Producto 4", price: 100 },
    { id: 5, name: "Producto 5", price: 100 }



],
  car: [],

};


export const shoppingReducer=(state,action)=>{

switch(action.type){
case TYPES.ADD_TO_CAR:{
let product=state.producto.find(p=> p.id===action.payload);

let itemInCar=state.car.find(item=> item.id=== product.id)

return itemInCar
?{
...state,
car:state.car.map(c=> c.id===itemInCar.id?{...c,quatity:c.quatity+1}:c)

}
:{...state,
    car:[...state.car,{...product,quatity:1}]}



}
case TYPES.REMOVE_ONE_FROM_CAR:{
    // let newproductos=state.car.filter(p=> p.id!=action.payload);
 //encontrar 
 let find=state.car.find(f=> f.id===action.payload);
 let modify;
 if(find.quatity>1){

  modify={...find,quatity:find.quatity-1};
  return{...state,car:state.car.map(p=>p.id===find.id?{...modify}:p)}
 }else if(find.quatity===1){
modify=state.car.filter(p=> p.id!=action.payload)
return {...state, car:[...modify]}
 }


 //si quatity es mayor a uno reducir
 
 //si el quantity es igual a uno utilizar


    // return{
    //   ...state,
    //   car:[...newproductos]
    // }
}
case TYPES.REMOVE_ALL_FROM_CAR:{
    let deleFull=state.car.filter(p=> p.id!=action.payload);

    return{...state, car:[...deleFull]}
}case TYPES.CLEAR_CAR:{
    return{...state, car:[]}
}
default:
    return state;


}

}


//  same:{1:[],
// 2:[],
// 3:[],
// 4:[],
// 5:[]}


// let id=action.payload;
// let notRepeat=0;
// let check={...state.same};
// state.car.filter((carP)=>{

// if(carP.id===id){
 
// check={...check,[id]:[...state.same[id],carP]}
// }


// })

// same:{...state.same,...check