
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { AddTodos } from './Components/AddTodos'
import { Todos } from './Components/Todos'
import {increment, decrement}  from "./Action/CounterActios";
import { FormTask } from './Components/FormTask'
import { MyTask } from './Components/MyTask'
import { Product } from './Components/Product'
import { CartItem } from './Components/CartItem'
import { restore } from './Action/CounterActios'

function App() {

const task= useSelector((state)=> state.todos.todos);
const  products=useSelector(state=> state.cart.products);
const  cart=useSelector(state=> state.cart.cart);

//_____________________________________
const distpatch=useDispatch();


const counter=useSelector(state=> state.counter);

console.log(counter)

  return (
    <>
     <h1>REDUX-TOOLSKIT</h1>



<h3>CARRITO DE COMPRAS</h3>

<div  className='wrap'>

{products.length>0&&products.map(p=> <Product key={p.id} product={p}/> )}
</div>

<hr />


<div className="wrap">

{cart.length>0&&cart.map(p=> <CartItem key={p.id} product={p}/> )}
</div>




<hr />
<h3>COUNTER</h3>

<h4>{counter}</h4>

<button  onClick={()=>distpatch(increment())}>+</button>
<button  onClick={()=>distpatch(decrement())} >-</button>
<button  onClick={()=>distpatch(restore())} >0</button>





 
{/* <AddTodos/>


<section  className='grid'>

    <Todos></Todos>
</section>

<h2>{counter}</h2>
<br /><br /><br />
<button  onClick={()=>distpatch(increment())}>+</button>
<button onClick={()=> distpatch(decrement())}>-</button> */}
   
    </>
  )
}

export default App
