import React, { memo, useEffect, useState } from 'react'
import { Loader } from '../Components/Loader'
import { helpHttp } from '../helper/helpHttp';
import { CardProduct } from '../Components/CardProduct';
 const Home = () => {
    const [products, setProducts] = useState(null);
    const [loading,setLoading]=useState(false)
   const [error, setError] = useState(null)

useEffect(()=>{
setLoading(true)
    helpHttp('https://fakestoreapi.com/products?limit=5')
    .then(data=>{
        

        if(!data.error){
            setProducts(data)
        }else{
return;
        }

        setLoading(false)
    })




},[])



  return (
    <>

   {products&& <section className="products-grid">
 {products.map(p=> <CardProduct key={p.id} productos={p}/>)}
    </section>}


    {products&& <section className="products-grid">
 {products.map(p=> <CardProduct key={p.id} productos={p}/>)}
    </section>}


{loading&&<div  className='Loader-page'><Loader/></div>}
    </>
  )
}

export {Home}
