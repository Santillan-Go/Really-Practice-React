import React from 'react'

export const Main2 = ({theme,text, log}) => {
  return (
    
<main  className={theme}>


{log?<p>{text.welcome}</p>:<p>{text.user}</p>}





<p>{text.mainContent}</p>
</main>

  )
}
