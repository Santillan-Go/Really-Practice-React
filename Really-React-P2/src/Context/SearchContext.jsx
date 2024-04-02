import { createContext,useState,useEffect } from "react";
import { helpHttp } from "../helper/helpHttp";
import { useNavigate } from "react-router-dom";

const initialSearch={query:""};
 const SearchContext=createContext();


const SearchProvider=({children})=>{
    const  [result,setResult]=useState(()=>{
let res=JSON.parse(localStorage.getItem("result"))||[]
return res;
    });
    const [search, setSearch]=useState(initialSearch);
    const navigate=useNavigate();


    useEffect(()=>{
        helpHttp(`https://fakestoreapi.com/products/category/${search.query}`)
        .then(data=>{
            setResult(()=>{


                localStorage.setItem("result", JSON.stringify(data))
                navigate("search")
                location.reload()
                return data
            })
        })
    
        },[search])

const data={result, search, setSearch};

    return(<SearchContext.Provider   value={data}>{children}</SearchContext.Provider>)
}








export {SearchProvider}

 export default SearchContext