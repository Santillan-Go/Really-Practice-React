import React,{useState} from 'react'
import { CrudForm } from './CrudForm';
import { CrudTable } from './CrudTable';


const initialDb=[

{
    id:1,
     name:"Iron-Man",

},
{
    id:2,
     name:"HULK",

},
{
    id:3,
     name:"Thor",

},
{
    id:4,
     name:"Spider-man",

},
{
    id:5,
     name:"Capttain America",

},

];



export const CrudApp = () => {

const [db,setDb]=useState(initialDb)

const [dataToEdit, setDataToEdit] = useState(null)
const createData=(data)=>{
  data.id=Date.now();
// console.log(data)


setDb([
...db,
data

])


}
const updataData=(data)=>{
let newData= db.map(el=> el.id===data.id?data:el)
setDb(newData)

}
const deleteData=(id)=>{
 
  let isDelete=confirm("¿Estás seguro de que quieres eliminarlo?");
  if(isDelete){
    let newData=db.filter(el=> el.id!==id)

  //    db.forEach(el=>{
  //   if(el.id!=id){
  //     newData.push(el)
  //   }
  // });

  setDb(newData);
  }
 
}

  return (
    <>

<h2>CRUD EN  REACT</h2>


<article  className='grid-1-2'>  
<CrudForm  createData={createData} 
updataData={updataData} 
dataToEdit={dataToEdit}
setDataToEdit={setDataToEdit}
 />


<CrudTable  data={db} 

setDataToEdit={setDataToEdit} deleteData={deleteData}/>



</article>


    </>
  )
}


