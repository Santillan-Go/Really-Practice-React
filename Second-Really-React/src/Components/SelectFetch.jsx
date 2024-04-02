import React,{useEffect,useState} from 'react'
import { helpHttp } from '../helper/helpHttp'
import { Select } from './Select'
import { SelectF } from './SelectF'
export const SelectFetch = () => {

const [estados, setEstado] = useState([])
const [municipios, setmunicipios] = useState([])
let apii=`beaf0a6c-72e2-4b53-beae-69fefa75bdd1`

    let getstate=`https://api.copomex.com/query/get_estados?token=beaf0a6c-72e2-4b53-beae-69fefa75bdd1`;



    useEffect(() => {
     
    const getState= async (api)=>{

 const data= await helpHttp().get(api);

 if(!data.err){
    setEstado([...data.response.estado])
 }


    }


    getState(getstate)
   
    },[])
    



    const getMuni=(muni)=>{
let getM=`https://api.copomex.com/query/get_municipio_por_estado/${muni}?token=beaf0a6c-72e2-4b53-beae-69fefa75bdd1`;

helpHttp().get(getM)
.then(data=>  {
  
  console.log(data)
  console.log(data.response.municipios)
setmunicipios([...data.response.municipios])

})

    }
  return (
    <div>

<h2>SELECT ANIDADOS</h2>
<SelectF data={estados}   getMuni={getMuni}/>

 {municipios.length>0?<Select  data={municipios} > </Select>:""} 

    </div>
  )
}
