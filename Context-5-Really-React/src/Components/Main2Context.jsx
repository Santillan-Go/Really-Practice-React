import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import LanguageContext from '../Context/LanguageContext'
import LogContext from '../Context/LogContext'

export const Main2Context = () => {
 
  const {theme} = useContext(ThemeContext)
const {log}=useContext(LogContext)
  const {text}=useContext(LanguageContext)
  return (
    
<main  className={theme}>


{log?<p>{text.welcome}</p>:<p>{text.user}</p>}





<p>{text.mainContent}</p>
</main>

  )
}
