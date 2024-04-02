import {useState,useEffect} from 'react'


export const useFetch = (url) => {
  
const [data, setData] = useState(null)
const [error, seterror] = useState(null)


useEffect(()=>{


fetch(url)
.then(res=> res.ok?res.json():Promise.reject({err:true,status:res.status,statusText:res.statusText}))
.then(json=> setData(json))
.catch(err=> seterror(err))
},[url])



return [data,error]
}
