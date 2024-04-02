import React,{useState}from 'react'
import { Header } from './Header'

import { Footer} from './Footer'
import { Main2 } from './Main2'


const initialTheme="light";
const initiallanguage="es";
const translation={
es:{gretting:"Hola, chicos bienvenidos a mi pagina",
Im:"Soy carlos, y me gusta aprender nuevas cosas y   tambien me gusta esto"
,btnlogin:"Iniciar sesion"
,btnLogout:"Cerrar Sesion",
mainContent:"Mi contenido principal",
footer:"Este es mi pies de pagina ",
user:"Hol@ Usuari@",
welcome:"Bienvenido"
},



en:{gretting:"Hello, Guys Welcome to my page",
Im:"I am carlos, and I like to learn new things and also I like this"
,btnlogin:"Log in"
,btnLogout:"Log out",
mainContent:"My Principal contents",
footer:"This is my footer page",
user:"Hello User",
welcome:"Welcome"
}


}


const initialAuth=null;
export const Mypage = () => {

    const [theme, settheme] = useState(initialTheme)

    const [language, setLanguage]=useState(initiallanguage);

const [text, setText] = useState(translation[language])

const [log, setLog] = useState(initialAuth)

const handleTheme=(e)=>{
console.log(e.target.value)
    settheme(e.target.value)
    // settheme(theme=="light"?"dark":"light")
}


const handleLanguage=(e)=>{
    console.log(e.target.value)
    setLanguage(e.target.value)
    setText(translation[e.target.value])
}


const handleAuth=(e)=>{
if(log){
    setLog(false)
}else{
    setLog(true)
}
}
    return (
    <div  className='my-page'>

    
<Header  theme={theme} log={log} handleAuth={handleAuth}  handleTheme={handleTheme} text={text} handleLanguage={handleLanguage}/>

<Main2  theme={theme} text={text} log={log}/>
<Footer theme={theme}
text={text}
/>




    </div>
  )
}
