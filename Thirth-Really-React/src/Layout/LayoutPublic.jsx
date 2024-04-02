import React from 'react'
import { Outlet,useNavigation } from 'react-router-dom'
import { NavBar } from '../Components/NavBar'

export const LayoutPublic = () => {


  const navigation=useNavigation();
  return (
    <>
        
 <NavBar/>
<main  className='conteiner'>
{navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Loading...</div>
                )}

    <Outlet/>
</main>

<footer  className='conteiner text-center'>FOOTER</footer>
    </>
  )
}
