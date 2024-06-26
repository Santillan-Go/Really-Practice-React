

import {useEffect,useState} from 'react'

export const useFetch = (url) => {



const [data, setData] = useState(null)
const [loading,setLoading] = useState(false)

const [error, setError] = useState(null);
   

useEffect(()=>{


const abortController= new AbortController();

const signal=abortController.signal;

const fetchData=async()=>{
setLoading(true)
try {
  const res = await fetch(url);

  if (!res.ok) {
    let err = new Error(`Error en la peticion fetch`);

    (err.status = res.status || "00"),
      (err.statusText = res.statusText || "Ocurrió un error");

    throw err;
  }


  const json= await res.json();

if(!signal.aborted){

    setData(json)
    setError(null)
}

} catch (err) {

    if(!signal.aborted){

        setData(null)
        setError(err)
    }

} finally {


    if(!signal.aborted){

        setLoading(false)
    }
}

}
 
fetchData()

return ()=>abortController.abort();

},[url])

return {data,error,loading}
}
