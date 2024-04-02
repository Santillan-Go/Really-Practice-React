
import "./Card.css";
export default function Card({name,id,email}){


    return(
    <>
  <figure  key={id}  className="card">    
<p  className="email">{email}</p>

    <figcaption>
{name}
    </figcaption>
  </figure>
    
    
    
    </>)
}