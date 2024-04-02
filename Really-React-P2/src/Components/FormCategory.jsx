import React, { useContext, useEffect, useState } from 'react'
import "./FormCategory.css";
import { helpHttp } from '../helper/helpHttp';
import { useNavigate } from 'react-router-dom';
import SearchContext from '../Context/SearchContext';

export const FormCategory = () => {
const navigate=useNavigate();

const [isdisabled,setDisabled]=useState(true);
const {setSearch}=useContext(SearchContext);




const write=(e)=>{
    if(!e.target.value){
setDisabled(true);

    }else{
setDisabled(false)

    }
}




const send=(e)=>{

    e.preventDefault();
setSearch({query:e.target.search.value})

e.target.search.value="";
setDisabled(true)
// navigate("search")

e.target.reload()
}



  return (
    <form  className='Form-flex'  onSubmit={send}>

<input type='text' name='search'  onChange={write} className='search-menu' placeholder='Buscar productos, marcas y más...' />

<input type="submit"  className='search-btn' value={"🔎"}  disabled={isdisabled?"disabled":""} />
    </form>
  )
}
