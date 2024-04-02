import React,{useState} from 'react'





export const useFormC = (initiForm,Validates) => {
    
    const [form, setform] = useState(initiForm);
   const [errors, seterrors] = useState({});




const handleChange=e=>{
  
let target=e.target;
setform({...form,
    [target.name]:target.checked||target.value
})

seterrors(Validates(form))

}


const handleSubmit=e=>{

e.preventDefault();
let target=e.target;
setform({...form,
    [target.name]:target.checked||target.value
})



seterrors(Validates(form))

if(Object.keys(errors).length===0){
    setform(initiForm)
}else{
    return
}



}




    return {form,handleChange,handleSubmit,errors,stop}
}
