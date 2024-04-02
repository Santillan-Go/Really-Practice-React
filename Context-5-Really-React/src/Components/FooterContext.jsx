import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import LanguageContext from '../Context/LanguageContext'

export const FooterContext = () => {
  const {theme} = useContext(ThemeContext)
  const {text}=useContext(LanguageContext)
 

return (
<footer  className={theme}>

{text.footer}

</footer>

  )
}
