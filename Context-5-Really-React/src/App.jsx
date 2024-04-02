

import './App.css'
import { Mypage } from './Components/Mypage'
import { MypageContext } from './Components/MypageContext'
import CrudApi from './Components/CrudApi'
import { CrudProvider } from './Context/CrudContext'

function App() {


  return (
    <>
     <h2>CONTEXT API</h2>

     <CrudProvider>
<CrudApi/>
</CrudProvider>
     {/* <Mypage/> */}
     <br /><br /><br /><br />
     <MypageContext/>
    </>
  )
}

export default App
