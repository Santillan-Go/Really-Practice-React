import React, { useState, useEffect } from 'react';
import Card from './Card';




export  function Peticiones(){


const [user, setUser] = useState([])


useEffect(()=>{

const getUsers=async (url)=>{


    let res= await fetch(url),
      data=await res.json();

      //console.log(data);
      setUser([...data])
}



getUsers("https://jsonplaceholder.typicode.com/users");

},[]);


    return(

        <>
        {user.map(el=> <Card name={el.name}  email={el.email}  key={el.id}/>)}
        
        </>
    )
}