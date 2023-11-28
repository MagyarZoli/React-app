import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import { App, About, Home, Contact } from "./reactRouterv6";

function ConfigureRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default ConfigureRouter;