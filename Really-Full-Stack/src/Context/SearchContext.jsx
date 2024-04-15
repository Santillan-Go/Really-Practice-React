import { createContext,useState,useEffect } from "react";
import { helpHttp } from "../helper/helpHttp";
import { useNavigate } from "react-router-dom";

const initialSearch={query:""};
 const SearchContext=createContext();


// eslint-disable-next-line react/prop-types
const SearchProvider=({children})=>{
    const  [result,setResult]=useState(()=>{
let res=JSON.parse(localStorage.getItem("result"))||[]
return res;
    });
    const [search, setSearch]=useState(initialSearch);
    const navigate=useNavigate();


    useEffect(()=>{
        let api=`http://localhost:4500/productos/category/${search.query}`;

        helpHttp(api)
        .then(data=>{
            setResult(()=>{


                localStorage.setItem("result", JSON.stringify(data))
                navigate("search")
                location.reload();
                return data
            })
        })
    
        },[search])

const data={result, search, setSearch};

    return(<SearchContext.Provider   value={data}>{children}</SearchContext.Provider>)
}








export {SearchProvider}

 export default SearchContext