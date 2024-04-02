import { useEffect, useState } from 'react';
import'./FormLog.css';

const initialLog={
user:"",
password:""
}


export const FormLog = ({verify}) => {

const [isdisable, setIsdisable] = useState(true);
const [log,setLog]=useState(initialLog)



const handleChange=(e)=>{
    let target=e.target;
   
   
    setLog({

        ...log,
        [target.name]:target.value
    })
}

useEffect(()=>{

if(log.user&&log.password){
    setIsdisable(false)
}else{
    setIsdisable(true)
}

    
},[log])


const handleSubmit=(e)=>{
e.preventDefault();
if(!log.user||!log.password) return alert("llena los campos");
verify(log)
setLog(initialLog)
}


  return (
    <form   onSubmit={handleSubmit} className='FormLog'>
        <div  className='input'>
                 <input type="text" value={log.user} onChange={handleChange} name='user' placeholder='Name'/>
      <input type="text"  name='password' value={log.password}  onChange={handleChange}  placeholder='Password'/>
        </div>
 

      <input type="submit"  value={"Log in"}  disabled={`${isdisable?"disable":""}`}/>
    </form>
  );
}
