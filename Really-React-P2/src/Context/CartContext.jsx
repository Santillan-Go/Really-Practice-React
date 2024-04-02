import { createContext, useEffect, useState } from "react";



const CartContext=createContext();



const CartProvider=({children})=>{

const [cart,setCart]=useState(()=>{
let data=JSON.parse(localStorage.getItem("cart"))||[];
    return data
});

const addToCart=(data)=>{
    let findItem=cart.find(p=> p.id===data.id);
if(findItem){

let changeQuatity=cart.map(p=> p.id===data.id?{...p,quatity:p.quatity+1}:p)
setCart(()=>{

    localStorage.setItem("cart",JSON.stringify(changeQuatity))
    return changeQuatity
});
}else{

setCart((prevCar)=>{

let newCart=[...prevCar, {...data,quatity:1}]
localStorage.setItem("cart",JSON.stringify(newCart));
})
}


}

useEffect(()=>{

},[cart])

const deleteToAllCart=(id)=>{
let  newData=cart.filter(c=> c.id!=id);

setCart(()=>{


    localStorage.setItem("cart",JSON.stringify(newData))

    return newData
})
}


const deleteOneFromCart=(id)=>{
const findItem=cart.find(p=> p.id===id);

if(findItem.quatity>1){
console.log(`MAYOR QUE 1 ${findItem.quatity}`)
let newChange=cart.map(p=> p.id===id?{...p,quatity:p.quatity-1}:p);
setCart(()=>{

localStorage.setItem("cart",JSON.stringify(newChange));
return newChange

})

}else if(findItem.quatity===1){
    let  newData=cart.filter(c=> c.id!=id);

    setCart(()=>{
    
    
        localStorage.setItem("cart",JSON.stringify(newData))
    
        return newData
    })
}


}

const data={cart, setCart,addToCart,deleteToAllCart,deleteOneFromCart};


    return(<CartContext.Provider value={data} >{children}</CartContext.Provider>)
}


export {CartProvider}


export default CartContext