import React from 'react'
import { Modal } from './Modal'
 import {useModal}  from "../Hooks/useModal"
 
export const Modals = () => {

   

  const  [open1,openModal1,closeModal1]=useModal(false)
  const  [open2,openModal2,closeModal2]=useModal(false)



  return (
    <div>


        <h2>MODALES</h2>

        <button  onClick={openModal1}>MODAL 1</button>

<Modal isOpen={open1}  closeModal={closeModal1}>

    <h3>MODAL 1</h3>

<p>Hola este es mi contenido de la modal 1</p>
   
   <div  className='img'>ddd</div>

</Modal>



<button  onClick={openModal2}>MODAL 2</button>

<Modal isOpen={open2}  closeModal={closeModal2}>

    <h3>MODAL 2</h3>

<p>Hola este es mi contenido de la modal 2</p>
   
   <div  className='img'>ddd</div>

</Modal>

    </div>
  )
}
