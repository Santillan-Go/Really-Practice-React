import React from 'react'
import { useFetch } from '../Hooks/useFetch'
import { Loader } from './Loader';
import { Messaje } from './Messaje';

export const SelectList = ({title,url,handleChange}) => {

  // let getM=`https://api.copomex.com/query/get_municipio_por_estado/${muni}?token=beaf0a6c-72e2-4b53-beae-69fefa75bdd1`;
  // let getstate=`https://api.copomex.com/query/get_estados?token=beaf0a6c-72e2-4b53-beae-69fefa75bdd1`;
//let colonias=`https://api.copomex.com/query/get_colonia_por_estado_municipio?token=pruebas&estado=Ciudad de México&municipio=Iztapalapa`


const {data,error,loading}=useFetch(url);

console.log(data, error,loading);

 let id=`select-${title}`,
 label=title.charAt(0).toUpperCase()+title.slice(1);




if(!data)  return null

if(error ){

  return  <Messaje  bgColor={"red"}  msg={`Error ${error.status} : ${error.statusText}`}/>
}


let option=data.response[title];
console.log(option)
  return (
    <>

    <label htmlFor={id}>{label}</label>
    {loading && <Loader/>}
        <select name={id} id={id}  onChange={handleChange}>


            <option value="">Elige un {title}</option>
      
      {data && option.map(el=>  <option value={el} key={el}>{el}</option>)}
        </select>

    </>
  )
}
