import { createBrowserRouter } from "react-router-dom";
import { LayoutMain } from "../pages/LayoutMain";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { ViewProduct,getProductoId } from "../pages/ViewProduct";
import { CartProvider } from "../Context/CartContext";
import { SearchCategory } from "../pages/SearchCategory";
import { SearchProvider } from "../Context/SearchContext";

export  const router = createBrowserRouter([
  { path: "/", 
  element:<SearchProvider> <LayoutMain /> </SearchProvider> , 
  children: [
    { index: true,  element: <Home/>  },
    {path:"profile", element:<Profile/>},
    {path:"cart", element: <CartProvider><Cart/>  </CartProvider> }
  ,
{
  path:"producto",
children:[
  {
    path:":id",
    element:<CartProvider>
      <ViewProduct/>
      </CartProvider>,
    loader:getProductoId
}
]
},
{
  path:"search",
  element:<SearchProvider> <SearchCategory/> </SearchProvider>
}
  ]


}
]);
