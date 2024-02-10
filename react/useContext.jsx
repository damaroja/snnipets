

//Un useContext es como un useState pero a nivel global.
//Para crear uno se crea una carpeta en el proyecto llamada context
// con un archivo llamado, por ejemplo, AuthProvider.jsx con lo siguiente:



import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{
            auth,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };
export default AuthContext;



//Aqui se pone a disposicion el useState Auth
//Despues, podemos cerar un CustomHook para gestionarlo:
//Creamos una carpeta llamada Hooks enm el proyecto y dentro un
//archivo llamado useAuth, por ejemplo con el siguiente codigo:

import { useContext } from "react";
import AuthContext from "../context/AuthContext"; // ESta es la ruta del Context


const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export default useAuth;



En el App.jsx tenemos que integrarlo en el archivo para lo que tenemos que 
importar el provider:


import { AuthProvider } from "./context/AuthProvider";

//Y lo usamos dentro de la App:

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="confirmar/:token" element={<Confirmar />} />
              <Route path="resetearPassword" element={<ResetarPassword />} />
              <Route
                path="resetearPassword/:token"
                element={<NuevoPassword />}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}


//Y ya lo tenemos. Para ello lo usamos como un hook normal:

import useAuth from "../hooks/useAuth";  //LO importamos

const { auth, setAuth } = useAuth();  //Y lo usamos






















