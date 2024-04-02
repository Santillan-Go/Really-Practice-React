

import React,{useState,useEffect} from 'react'
import { SelectList } from './SelectList'

export const SelectAnidados = () => {


const [state, setState] = useState("")
const [town, setTown] = useState("")
const [suborb, setsuborb] = useState("")

const TOKE="beaf0a6c-72e2-4b53-beae-69fefa75bdd1";
  return (
    <div>
      <h2>SelectAnidados</h2>
      <h3>México</h3>

      <SelectList
        title={"estado"}
        url={`https://api.copomex.com/query/get_estados?token=pruebas`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
{ state &&    <SelectList
url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=pruebas`}
        title={"municipios"}
        handleChange={(e) => {
          setTown(e.target.value);
        }}
      />}

   {town &&   <SelectList
        title={"colonia"}
        url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=pruebas`}
        handleChange={(e) => {
          setsuborb(e.target.value);
        }}
      />}

      <pre>
        <code>
          {state}-{town}-{suborb}
        </code>
      </pre>
    </div>
  );
}
