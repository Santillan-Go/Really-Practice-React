import React,{useState, useEffect} from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import {Request } from "../helper/Request";

export const MineCrudApi = () => {
const [db, setDb] = useState([])
const [dataToEdit, setDataToEdit] = useState(null)



let api=`http://localhost:5000/Marvel`;


useEffect(()=>{


   Request(api)
   .then(data=>{
    if(!data.err){
           setDb(data)
        //   console.log(db)
    }else{
       // console.log(data)
    }
 
   }   )



},[])

const createData=(data)=>{

    data.id=Date.now();
  let  option={
        method:"POST",
        headers:{"content-type":"application/json"},
       body:data
    }
        Request(api,option)
        .then(res=>{
    
            if(!res.err){
                setDb([...db,data])
            }else{
               // console.log(res)
            }
        })


    


}

const updateData=(data)=>{

let endPoint=`${api}/${data.id}`,
option={
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:data
}
    Request(endPoint,option)
    .then(res=>{

        if(!res.err){
            const newData=db.map(el=> el.id===data.id?data:el)
setDb(newData)
        }else{
           // console.log(res)
        }
    })
//console.log(data)


}



const deleteData=(id)=>{
    let endPoint=`${api}/${id}`,
    option={
        headers:{"content-type":"application/json"}
   , method:"DELETE"
    
    }
Request(endPoint,option)
.then(res=>{


    if(!res.ok){

 const newData=db.filter(el=> el.id!=id);

    setDb(newData);


    }else{
        //console.log("error")
    }
})

   
}

  return (
    <>
    
    <section>


<CrudForm  createData={createData} updataData={updateData  } setDataToEdit={setDataToEdit} dataToEdit={dataToEdit} />



<CrudTable  data={db}  deleteData={deleteData} setDataToEdit={setDataToEdit} /> 




    </section>
    
    
    </>
  )
}
