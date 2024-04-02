import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu2 } from "./Components2/Menu2.jsx";
import { Aboutyou } from "./pages2-1/Aboutyou.jsx";
import { Check } from "./pages2-1/Check.jsx";
import { Error404 } from "./pages2-1/Error404.jsx";
import {Home2}  from "./pages2-1/Home2.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home2/>} ></Route>
        <Route path="/about-you" element={<Aboutyou />} />
        <Route path="/check" element={<Check />} />

        <Route path="*" element={<Error404></Error404>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
