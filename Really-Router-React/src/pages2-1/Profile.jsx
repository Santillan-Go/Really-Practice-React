import React from 'react'
import "./Profile.css"
export const Profile = ({name="jua",city="Tijuana", email="carlossantillan2234@"}) => {
  return (
    <div  className='profile'>



<h4>{name}</h4>


<h3>{city}</h3>


<p>{email}</p>
    </div>
  )
}
