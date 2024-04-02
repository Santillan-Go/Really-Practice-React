import React, { useContext} from 'react'

import "./CartItem.css";
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';
export const CartItem = ({data}) => {
//DESTRUCTURAR PROPIEDADES
    let {image,id, price, title,quatity }=data;

    let {deleteToAllCart, deleteOneFromCart,addToCart}=useContext(CartContext);

  return (
    <section className="grid-item-cart">
      <article className="detail-item">
        <div className="img-64">
        <Link to={`/producto/${id}`}>    <img src={image} alt={title} /></Link>
        </div>
        <div className="actions">
          <Link  to={`/producto/${id}`}><h4>{title}</h4> </Link>

          <div>

            <button  onClick={()=>deleteToAllCart(id)}>Eliminar</button>
          </div>
        </div>
      </article>
      <div className="amount-item">

        <div  className='change-amount'>
  <button onClick={()=>addToCart(data)}>+</button>
<h5>{quatity}</h5>
<button onClick={()=>deleteOneFromCart(id)}>-</button>
        </div>
      
      
      </div>

      <div className="price-item">
        <h4>${price*quatity}</h4>
      </div>
    </section>
  );
}
