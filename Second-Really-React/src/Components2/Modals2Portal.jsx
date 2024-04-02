import React from 'react'
import { Modal2 } from './Modal2'
import { useModal2 } from '../Hooks/useModal2'
import { SearchMusic } from '../Components/SearchMusic';

export const Modals2 = () => {


const   [modal1,isopen,isclose]=useModal2(false);
const   [modal2,isopen2,isclose2]=useModal2(false);







    
  return (
    <section  className='section-flex'>

<h2>MODALES</h2>

<button onClick={isopen} className='open-modal2'>Modal 1</button>
<Modal2   open={modal1}  isClose={isclose}>



<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_f-3Npwnj40B6u8O8WmcX8swxRqUS8ncQg&usqp=CAU" alt="img" />

<p> THIS IS APPLE</p>
</Modal2>



{/* <button onClick={isopen2} className='open-modal2'>Modal 2</button>
<Modal2  open={modal2}  isClose={isclose2}>


  <SearchMusic></SearchMusic>
</Modal2> */}


    </section>
  )
}
