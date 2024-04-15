import React,{useContext, useEffect, useState} from 'react'
import { CardProduct } from '../Components/CardProduct';
import SearchContext from '../Context/SearchContext';

export const SearchCategory = () => {

    const words=/^[a-zA-Z0-9\s/w]+$/;

    if(words.test("Juan carlos'")){
 console.log("es un texto con espacios")
    }else{
console.log("esta facio")
    }

   // const {result}=useContext(SearchContext);
   const result=JSON.parse(localStorage.getItem("result"))||[];
    // const [products,setCart]=useState(()=>{
    //     let data=JSON.parse(localStorage.getItem("cart"))||[];
    //         return data
    //     });
  return (<>
    {result&& <section className="search-grid">
    {result.map(p=> <CardProduct key={p.id} productos={p}/>)}
       </section>}
  
  
  </>
  
  )
}
