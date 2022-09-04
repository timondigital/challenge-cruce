import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductsSections from "./components/sections/ProductsSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
// <React.StrictMode>{/* </React.StrictMode> */}
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="productsSections" element={<ProductsSections />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>
              Ups! No encontramos esta página... por favor regresa al home
              <Link to="/"> Volver a home </Link>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
