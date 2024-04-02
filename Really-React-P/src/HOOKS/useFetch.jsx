import React,{useState, useEffect} from 'react';




export  const useFetch=(url)=>{

const [data, setData] = useState(null)
const [ispending, setIspending] = useState(true)
const [error, setError] = useState(null)

useEffect(()=>{

    const getData = async (url) => {


        try{
            let res = await fetch(url);
          if(!res.ok) throw {err:true, statut:res.status,statusText:!res.statusText?"ERROR 404:OCURRIÓ UN ERROR":res.statusText}
           let data = await res.json();
           setIspending(false)
           setData(data)
           setError({error:false})
        
        }
        catch(err){
            
            setIspending(true)
            setError(err)

console.log(err);

        }};
  
      getData(url);
   


},[url])



return{data, ispending,error}
}