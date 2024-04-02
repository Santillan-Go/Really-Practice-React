import { createContext,useState } from "react";

const LanguageContext=createContext();
const translation = {
    es: {
      gretting: "Hola, chicos bienvenidos a mi pagina",
      Im: "Soy carlos, y me gusta aprender nuevas cosas y   tambien me gusta esto",
      btnlogin: "Iniciar sesion",
      btnLogout: "Cerrar Sesion",
      mainContent: "Mi contenido principal",
      footer: "Este es mi pies de pagina ",
      user: "Hol@ Usuari@",
      welcome: "Bienvenido",
    },
  
    en: {
      gretting: "Hello, Guys Welcome to my page",
      Im: "I am carlos, and I like to learn new things and also I like this",
      btnlogin: "Log in",
      btnLogout: "Log out",
      mainContent: "My Principal contents",
      footer: "This is my footer page",
      user: "Hello User",
      welcome: "Welcome",
    },
  };
const initiallanguage = "es";

const LanguageProvider=({children})=>{
    
    const [language, setLanguage] = useState(initiallanguage);
    const [text, setText] = useState(translation[language]);
 


    const handleLanguage = (e) => {
        console.log(e.target.value);
        setLanguage(e.target.value);
        setText(translation[e.target.value]);
      };
    
const data={handleLanguage,text};
    return(
        <LanguageContext.Provider value={data}> {children}</LanguageContext.Provider>
    )
}


export {LanguageProvider}

export default LanguageContext