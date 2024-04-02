import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'



//EXTRAEMOS EL CONJUNTO DE ESTADO PARA PASARLO AL COMPONENTE PROVIDER DE REDUX
// ESTA EN SU PROPIEDAD STORE






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* PROVIDER ENVUELVE EL COMPONENTE PADRE */}
<Provider  store={store}>


 <App/>

</Provider>


  



  </React.StrictMode>,
)
