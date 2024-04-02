import React from 'react'
import "./Search.css"
import { useFetch } from "../Hooks/useFetch"
export const Search = ({setParams,setUser}) => {

const search=(e)=>{
e.preventDefault();

setParams({user:e.target.search.value})
}




 const [data, error]=useFetch("https://jsonplaceholder.typicode.com/users")

if(!error){
    setUser(data)
}else{
    console.log(error)
}

  return (


    <div  className='div-form'>

<form onSubmit={search}  className='formSearch'>

<input type="search"  name='search' className='searchInput'/>
<input type="submit"   value={"🔎"}  className='searchbtn'/>

</form>


    </div>
  )
}
