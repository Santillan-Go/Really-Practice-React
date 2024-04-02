import { createContext,useState } from "react";


const LogContext=createContext();

const initialAuth = null;

const LogProvider=({children})=>{
    const [log, setLog] = useState(initialAuth);
     const handleAuth = (e) => {
        if (log) {
          setLog(false);
        } else {
          setLog(true);
        }
      };


const data={log, handleAuth}
   

    return (<LogContext.Provider  value={data}>{children}</LogContext.Provider>)
}



export {LogProvider};

export default LogContext;