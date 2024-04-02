import { createContext,useState } from "react";

//1
//CREAR EL CONTEXTO=> CON UN NOMBRE  RELACIONADO 

const ThemeContext=createContext();

const initialTheme="light";


//2
//DECLARAR LA FUNCION PROVIDER, QUE RECIBE COMO PARAMETRO(CHILDREN)
//ESTA MISMA RETORNA EL CONTEXTO CON SU PROPIEDAD .PROVIDER ADEMAS DE SU PROP VALUE(DATA) Y A SU VEZ ENVUELVE 
//A LA PROP CHILDREN


//3 PARA LLAMAR A LOS ESTADOS HACEMOS USO DEL HOOK=> useContext(RECIBE EL CONTEXTO EXPORTADO)

const ThemeProvider=({children})=>{
    const [theme, settheme] = useState(initialTheme);


    const handleTheme=(e)=>{
        console.log(e.target.value)
            settheme(e.target.value)
            // settheme(theme=="light"?"dark":"light")
        }
        

const data={theme,handleTheme}
    return(

        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

export  {ThemeProvider}

export default ThemeContext