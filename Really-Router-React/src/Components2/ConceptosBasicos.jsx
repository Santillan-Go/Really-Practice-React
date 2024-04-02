import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "../pages2/Error";
import { MenuConceptos } from "./MenuConceptos";
import { Usuario } from "../pages2/Usuario";
import { Productos } from "../pages2/Productos";
export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>CONCETOS BASICOS</h2>





      <BrowserRouter>
{/* EL COMPONENTE CON LINK TIENE QUE ESTAR DENTRO DEL COMPONENTE BROWSERROUTER */}
      <MenuConceptos/>


        <Routes>
          <Route path="/" element={<h2>THIS IS HOME</h2>} />

          <Route path="/about" element={<h2>ABOUT</h2>} />


          <Route path="/usuario/:username" element={<Usuario></Usuario>} />
<Route  path="/contact"   element={<h2>THIS IS CONTACT</h2>}/>

<Route  path="/productos"  element={<Productos/>}>  </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
