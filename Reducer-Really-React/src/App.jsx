
import './App.css'
import { Contador } from './Components/contador'
import { ContadorMejorado } from './Components/ContadorMejorado'
import CrudApi from './Components/CrudApi'
import { ShoppingCar } from './Components/ShoppingCar'
import { CrudProvider } from './Context/CrudContext'

function App() {
  

  return (
    <>
   <h2>USEREDUCER</h2>
   <hr />
   <Contador/>
   <hr />
   <ContadorMejorado/>
   
   <ShoppingCar/>


<CrudProvider>
   <CrudApi/>


</CrudProvider>

    </>
  )
}

export default App
