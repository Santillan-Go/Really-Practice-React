import React from 'react'
//LA KEY NO SE AGREGA A LA FATHER TAG, SI NO AL COMPONENTE CUANDO SE LLAMA
//ESTOS SOLO SE AGREGAN A COMPONENTES DINAMICOS

export const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
  
  
  let {name, id}=el;
  
  
  return (
    <>


<tr  >
            <th>{name}</th>
            <th>
              <button  onClick={()=> setDataToEdit(el)}>Editar</button>
              <button  onClick={()=> deleteData(id)}>  Eliminar</button>
            </th>
          </tr>
    </>
  )
}
