
import './App.css'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import { HOME } from './pages/Home'
import { Acerca } from './pages/Acerca'
import { Contectos } from './pages/Contactos'
import { Header } from './Components/header'
import { Menu } from './Components/Menu'
import { NotFound } from './pages/NotFound'
import { Productos } from './pages/Productos'
import { ProductosDetail } from './pages/ProductosDetail'

import {useState}  from "react";
import { Servicios } from './pages/Servicios'
import { ServiciosGarantia } from './pages/ServiciosGarantia'
import { ServiciosLista } from './pages/ServiciosLista'
import ServiciosPolitica from './pages/ServiciosPolitica'
import { ServiciosDetail } from './pages/ServiciosDetail'
import { ConceptosBasicos } from './Components2/ConceptosBasicos'
import { MenuConceptos } from './Components2/MenuConceptos'
import { Menu2 } from './Components2/Menu2'




function App(){



  return(
    <>
  
<Menu2></Menu2>
    </>
  )
}
















// PRACTCAS 01

// function App() {
// const [productos, setProductos] = useState([
//   {id:1, name:"Milk", precio:62}
//   ,{id:2, name:"BRED", precio:22}
//   ,{id:3, name:"ICE CREAM", precio:30}
//   ,{id:4, name:"CHEESE", precio:49}
  
//   ])



// const [servicios, setServicios] = useState([
//     {id:1, name:"SERVICIO 1", precio:625}
//   ,{id:2, name:"SERVICIO 2", precio:224}
//   ,{id:3, name:"SERVICIO 3", precio:305}
//   ,{id:4, name:"SERVICIO 4", precio:492}
  
// ])  

 
//   return (
  



// VERSION 6 DE ROUTER=>

// <>
// <BrowserRouter>
//   {/* BROOSERROTER=>
// EMPAQUETADOR DE LA LIBRERIA */}
//   <Header />
//   <Menu />

//   <Routes>
//     {/* ROUTES QUIEN CONTIENE LAS RUTAS */}

//     <Route path="/" element={<HOME />}>
//       {" "}
//     </Route>
//     {/* PATH => RUTA 
// ELEMENT => EL CONTENIDO */}
//     <Route path="/acerca" element={<Acerca />}>
//       {" "}
//     </Route>
//     <Route path="/contactos" element={<Contectos />}>
//       {" "}
//     </Route>

//     <Route path="*" element={<NotFound />}>
//       {" "}
//     </Route>
//     <Route path="/about" element={<Navigate to={"/acerca"} />}></Route>

//     <Route
//       path="/productos/:id"
//       element={<ProductosDetail productos={productos} />}
//     ></Route>

//     <Route path="/servicios" element={<Servicios />}>
//       <Route index element={<h2>ESTE ES EL HOME DE SERVICIOS</h2>} />

//       <Route path="garantia" element={<ServiciosGarantia />} />

//       {/* AGREGAR LOS SERVICIOS */}
//       <Route
//         path="lista"
//         element={<ServiciosLista servicios={servicios} />}
//       />

//       <Route
//         path=":id"
//         element={   <>
//         <ServiciosLista  servicios={servicios}/>
//         <ServiciosDetail servicios={servicios} />
        
//         </>}
//       />

//       <Route path="politicas" element={<ServiciosPolitica />} />
//     </Route>



//     <Route
//       path={"/productos"}
//       element={<Productos productos={productos} />}
//     ></Route>
//     {/* NAVIGATE => TE PERMITE VOLVER A REDERIGIR */}
//   </Routes>
// </BrowserRouter>
// </>
//   );
// }

export default App



