import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Pages/Layout";
import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";
import { SittingProvider } from "../context/sittingContext";
import { LogIn } from "../Pages/LogIn";
import { LogInProvider } from "../context/LogInContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SittingProvider>
        <LogInProvider>
          <Layout />
        </LogInProvider>
      </SittingProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "log",
    element: (
      <LogInProvider>
      
        <LogIn />
      </LogInProvider>
    ),
  },
]);
