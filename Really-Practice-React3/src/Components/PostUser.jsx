import React from 'react'
import  "./PostUser.css"
import { Link } from 'react-router-dom';


export const PostUser = ({data}) => {
  let {name, img}=data;
  return (
    <article  className='postUser'>
      <div className="header-content">
        <figure>
            <figcaption  className='content-profile'>   
                 <Link  to={"/profile"}><div className="profile"></div>   </Link>
                 
                 </figcaption>
   
          <figcaption className='name-content'>
            <p>{name}</p>
          </figcaption>
        </figure>
      </div>

      <div className="images-content">
      <img src={img} alt="" />
      </div>

      <div className="actions-content">


<div className='actions-info'>
    <p>10 👌</p>
</div>


        <div  className='actions-buttons'>
             <button><p>👌</p></button>
        <button><p>Comentarios</p></button>
        <button><p>Compartir</p></button>
        </div>
       
      </div>
    </article>
  );
}
