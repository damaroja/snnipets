


import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";

//Esta es una estructura basica del reouting de una app con react
//Vemos como la ruta Login esta supeditada a la ruta AuthLayout
// De la que hereda


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
