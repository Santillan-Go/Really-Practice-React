import { createContext, useState } from "react";



const SittingContext=createContext();


const SittingProvider=({children})=>{


    const [sitting, setSitting] = useState(false)



    const setChange=()=>{

        setSitting((presitting)=>{
            console.log(!presitting)
    return !presitting
        })
    }

const data={sitting, setChange,setSitting}
    return <SittingContext.Provider value={data}> {children}  </SittingContext.Provider>
}


export {SittingProvider};


export default SittingContext;