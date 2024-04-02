import {useState,} from 'react'

export const useModal2 = (initial=false) => {
  

    const [open, setOpen] = useState(initial)



    const isOpen=()=>setOpen(true);
    const isClose=()=>setOpen(false);


return [open, isOpen,isClose]
}
