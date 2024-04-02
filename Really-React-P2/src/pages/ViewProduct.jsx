
import { useContext } from "react";
import { useLoaderData,Link } from "react-router-dom";
import CartContext from "../Context/CartContext";

export const ViewProduct = () => {
  const { producto } = useLoaderData();
const {addToCart} = useContext(CartContext)


  let {image, price, description, title, rating}=producto;
  return (
    <div className="conteiner-producto-id">

<div  className="links">
<Link to="/">Volver</Link>

</div>


      <div className="producto-id">
        <article className="info">
          <div  className="image">
          <img src={image} alt={title} />
          </div>
          <div  className="detail">
            <h3>{title}</h3>
            <span>⭐ {rating.rate}</span>
            <h4>$ {price}</h4>
          </div>


          <div  className="description">

            <h2>Descripción</h2>

            <p className="des-parrafo">
{description}

            </p>
          </div>
        </article>

        <article className="actios">
            <div className="buy-producto">
 <button  className="buy">Comprar Ahora</button>
<button onClick={()=>addToCart(producto)} className="cart">Agregar al Carrito</button>
         
            </div>
          
        </article>
      </div>
    </div>
  );
};

export const getProductoId = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  if (!res.ok)
    throw Promise.reject({
      err: true,
      status: res.status,
      statusText: res.statusText,
    });

  const producto = await res.json();
  return { producto };
};
