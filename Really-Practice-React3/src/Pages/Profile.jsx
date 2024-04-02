import React, { useContext } from 'react'
import "./Profile.css";
import { PostUser } from '../Components/PostUser';
import LogInContext from '../context/LogInContext';
export const Profile = () => {
const {user}=useContext(LogInContext)
   console.log(user)
  return (
    <div  className='profile-content'>



<section  className="profile-content-all">

<div  className='portada-profile'>


</div>
<div  className='name-content-p'>


  <article  className='profile-image'>


  </article  >
<article  className='name'>
    <p>{user.user}</p>
</article>

</div>


<hr />


<div  className='post-user-profile '>
{user.posts.length>0&& user.posts.map(u=><PostUser data={u}/>)}

</div>


</section>

    </div>
  )
}
