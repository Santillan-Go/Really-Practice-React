import React from 'react'

import { Outlet } from 'react-router-dom'
import { Header } from '../Components/Header'

export const LayoutMain = () => {
  
  return (
    <>
<Header/>
    
<main  className='main'>
<Outlet/>

</main>





<footer>

<h4>FOOTER</h4>
</footer>

    </>
  )
}
