import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Componente from "./Components/Componente";
import Estado from "./Components/estado";
import Propiedades from "./Components/propiedades";
import RenderizadoCondicional from "./Components/RenderizadoCondicional";
import RenderizadoElemento from "./Components/RenderizadoElemento";
import { EventoES6, EventoES7, MasSobreEventos } from "./Components/Evento";
import Padre from "./Components/ComunicacionComponentes";
import CicloDeVida from "./Components/CicloDeVida";
import { AjaxApi } from "./Components/AjaxApi";

import ContadorHook from "./Components/ContadorHook";
import ScrollHooks from "./Components/ScrollHook";
import RelojHook from "./Components/RelojHook";

import { ApiHook } from "./Components/ApiHook";
import { HookPersonalizado } from "./Components/HookPersonalizado";
import Referencias from "./Components/referencias";
import Formulario from "./Components/Formulario";
import Estilos from "./Components/ESTILOS";


function App() {
  //

  const names = ["juan", "carlos"];

  return (
    <>
      <h1>Hello this is my fisrt time in react</h1>

      <Componente msg="Hola soy un componente" />
      <ul>
        {names.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <hr />

      <Propiedades
        cadena="juan"
        numero={18}
        boolean={true}
        array={["juan", "santillan"]}
        object1={{ nombre: "juan", lastname: "santillan" }}
        funcion={(num) => num * num}
        numbers={[1, 2, 3, 4]}
        componenteReact={
          <Componente msg={"SOY UN COMPONENTE PASADO COMO PARAMETRO"} />
        }
      />
      <hr />

      <Estado></Estado>

      <hr />

      <RenderizadoCondicional />

      <hr />
      <RenderizadoElemento />
      <hr />
      <EventoES6 />

      <hr />
      <EventoES7 />

      <MasSobreEventos />

      <Padre />

      <hr />

      <CicloDeVida />

      <hr />
      <AjaxApi />
      <hr />
      <ContadorHook titulo="SEGUIDORES "></ContadorHook>
      <hr />
      <ScrollHooks />
      <hr />
      <RelojHook />
      <hr />
      <ApiHook />
      <hr />

      <HookPersonalizado />
      <hr />

      <Referencias />
      <hr />

      <Formulario/>
      <hr />
      <Estilos/>
    </>
  );
}

export default App;
