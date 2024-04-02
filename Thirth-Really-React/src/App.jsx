import { useState } from 'react';
import './App.css'
import { 
  createBrowserRouter,
  BrowserRouter, 
  Routes,
   Route,
    Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';

//PAGES
import {Home}  from "./pages/Home";
import {About}  from "./pages/About";

//LAYOUT
import { RouteLayout } from './Layout/RouteLayout';
import { HelpLayout } from './Layout/HelpLayout';
import { Faq } from './pages/help/Faq';
import { Contact } from './pages/help/Contact';
import { Error404 } from './pages/Error404';
import { Carrer, carrerData } from './pages/Carrer';
import { CarrerDetail } from './pages/CarrerDetail';
import { CarrerLayout } from './Layout/CarrerLayout';



export function App(){


  
}











// //OTRAS FORMAS DE REACT V6...

// const router =createBrowserRouter(
//   createRoutesFromElements(

//     <Route path='/' element={<RouteLayout/>}>


//   <Route index  element={<Home/>} />
//   <Route path='/about'  element={<About/>} />
//   <Route  path='help'  element={<HelpLayout/>} >

//     <Route  path='faq'  element={<Faq/>}/>
//     <Route  path='contact'  element={<Contact/>}/>
//   </Route>
//   <Route 
//   path='carrers'

//   element={<CarrerLayout/>}>

// {/* USEPARAMS
// LOADERS=> ATRUBUTO=> FUNCION RETURN PROMISE
// USELOADERSDATA 
// ERRORELEMENT => RETURN THE ERRROR

// USIN THE HOOK USEROUTERROR()
// */}
// <Route index  
// element={<Carrer/> }
// loader={carrerData}

// ></Route>

// <Route  path=':id'  element={<CarrerDetail/>} ></Route>

//   </Route>
//     <Route path="*"  element={<Error404/>} />


//   </Route>

//   )
// )
// function App() {


//   return (
//   <RouterProvider  router={router} /> 
   

//   )
// }

// export default App








//OLD VERSION 


// return (
//   <BrowserRouter>
  
// <header>

// <nav>

// <NavLink  to={"/"}>HOME</NavLink>
//  <NavLink  to={"About"}>ABOUT</NavLink>
// </nav>

// </header>

//   <main>

// <Routes>


//  <Route path='/'  element={<Home/>} />
//  <Route path='/about'  element={<About/>} />
 
 
//  </Routes>

//   </main>
  
  
//   </BrowserRouter>
//  )
// }

