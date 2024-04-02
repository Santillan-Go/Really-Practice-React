import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page2/Home";
import { About } from "../page2/About";
import { NotFound } from "../page2/NotFound";
import { LayoutPublic } from "../Layout/LayoutPublic";
import {Blog, loader}  from "../page2/Blog"
import { PostDetail,dataDetail } from "../page2/PostDetail";


export const router = createBrowserRouter([
  {
    path: "/",

    element: <LayoutPublic />,
    errorElement: <NotFound />,

    children: [
      {
      index:true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
       
      },
      {
        path: "/",
        element: <About />,
      
      },
      {
        path: "blog",
        element: <Blog/>,
        loader:loader,
     
      },
      
      {
        path: "/blog/:id",
        element: <PostDetail/>,
        loader:dataDetail,
     
      }
    ],
  },
]);
