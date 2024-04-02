import { createSlice } from "@reduxjs/toolkit"





const initialState={
    products:[

        {name:"orange", id:1},
        {name:"banana", id:2},

        {name:"watermelon", id:3},
        {name:"apple", id:4},

    
        

    ],
    cart:[]
}


const CartSlice=createSlice({

    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
        let check= state.cart.find(p=> p.id===action.payload);
        
            if(check){

            let changeQ= state.cart.map(p=>p.id===check.id?{...check, quantity:check.quantity+1}:p);

            state.cart=changeQ;

        }else{
            const item=state.products.find(p=> p.id===action.payload);

state.cart.push({...item, quantity:1})
        }


        },
        deleteToCart:(state, action)=>{

            let  newitems=state.cart.filter(i=> i.id!=action.payload);


            state.cart=newitems;
        },
        deleteOne:(state, action)=>{
let finditem=state.cart.find(i=> i.id===action.payload);

if(finditem.quantity>1){
    
let change= state.cart.map(i=> i.id===action.payload?{...i,quantity:i.quantity-1}:i);
state.cart=change;
}else if(finditem.quantity===1){
    let  newitems=state.cart.filter(i=> i.id!=action.payload);


    state.cart=newitems;
}


        }

    }
})


export const {addToCart, deleteToCart, deleteOne}=CartSlice.actions;

export {CartSlice}