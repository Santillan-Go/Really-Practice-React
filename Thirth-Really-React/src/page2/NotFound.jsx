import React from 'react'
import { Link, useRouteError } from "react-router-dom";



export const NotFound = () => {
const error= useRouteError();

console.log(error)
    return (
    <div>
<h1>ERROR 404</h1>
<p>{error.status||error.statusText}</p>



<Link  to={"/"}>Home</Link>
    </div>
  )
}
