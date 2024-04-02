import Card from "./Card";
import { CreateForm } from "./CreateForm";
import React, { useEffect, useState } from 'react'


export function CreateTask(){

const [task, setTask] = useState([]);



const getData=(data)=>{

    data.id=Date.now();
setTask([...task, data])

}

    return(
        <>
        <CreateForm   getData={getData}/>
        <section  className="sectioncard">

{task.map(el=> <Card  name={el.name}  email={el.email}  key={el.id}/>)}
        </section>
        
        
        </>
    )
}