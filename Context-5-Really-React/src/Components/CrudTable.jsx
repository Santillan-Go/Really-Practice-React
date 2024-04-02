import { useContext } from "react";
import { CrudTableRow } from "./CrudTableRow";
import CrudContext from "../Context/CrudContext";



export function CrudTable({db}) {
const {setDataToEdit,deleteData}=useContext(CrudContext)


  return (
    <div>
      <h2>DATA TABLE</h2>

      <table>
        <thead>
          <tr>
            <th>NAME</th>

            <th>ACCIONES</th>
          </tr>
        </thead>

        <tbody>
         

          {db.length>0?db.map((el,i)=><CrudTableRow  key={el.id}  el={el}  setDataToEdit={setDataToEdit} deleteData={deleteData}/> ):<tr>  <td  colSpan="3">"DATABASE IS  EMPTY"</td></tr>}
   
       
       </tbody> 
      </table>
    </div>
  );
}
