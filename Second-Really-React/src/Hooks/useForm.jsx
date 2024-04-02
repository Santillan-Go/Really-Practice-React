import {useState} from 'react'
import { helpHttp } from '../helper/helpHttp';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {

    const {name, value}=e.target;
setForm(
    {...form,[name]:value}
)
    
  };
  const handleBluer = (e) => {
handleChange(e)

setErrors(validateForm(form))
  };

  const handleSubmmit = (e) => {

    e.preventDefault();
    
setErrors(validateForm(form))


if(Object.keys(errors).length===0){

  setLoading(true)
  helpHttp().post(`"https://formsubmit.co/ajax/carlossantillan10405@gmail.com"`,{
    headers:{"Content-Type":"application/json",
    Accept:"application/json"},
    body:form
    
      })
  .then(res=>{
    setLoading(false);
setResponse(true) 
setForm(initialForm)
   setTimeout(()=>setResponse(false),5000)
  })
}else{
  return;
}

  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBluer,
    handleSubmmit,
  };
}
