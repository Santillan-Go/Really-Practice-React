import React from 'react'

export const Messaje = ({msg, bgColor}) => {

    let style={
        backgroundColor:`${bgColor}`,
        padding:"1rem",
        marginBotton:"1rem",
        textAlign:"Center",
        color:"white",
        fontSize:"1rem",
        fontWeight:"bold"
    }
  return (
    <div  style={style}>
        
        <p>{msg}</p>
        </div>
  )
}
