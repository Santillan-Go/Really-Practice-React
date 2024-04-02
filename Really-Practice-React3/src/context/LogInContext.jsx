import { createContext, useState } from "react";



const LogInContext=createContext();





const LogInProvider=({children})=>{


    const [user,setUser]=useState(()=>{
        const user=JSON.parse(localStorage.getItem("user"))||{};

        return user;
    })

    const data={user, setUser}

    return<LogInContext.Provider  value={data}>{children}</LogInContext.Provider>
}


export {LogInProvider}



export default LogInContext