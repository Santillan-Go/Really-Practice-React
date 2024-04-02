import React from 'react'
import "./Profile.css";
export const Profile = () => {
    const user={
        nameu:"Juan Santillan",
        age:"18",
        country:"Mexico",
        phoneNumber:"664-795-4409",
        gmail:"carlossantilan10405@gmail.com"

    }
  return (
    <>

    <section className='data'>

<div className='photo'>
 
</div>
<div>
  <h4>{user.nameu}</h4>
<h5>{user.gmail}</h5>
</div>


    </section>


    <section className='optios'></section>





    </>
  )
}
