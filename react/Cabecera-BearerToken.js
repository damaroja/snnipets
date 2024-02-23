//Para hacer las peticiones get o post con Axios, posemos hacer esto:


try {
        const token = localStorage.getItem("token-APV-0001");  // Selecciona Token
        if (!token) return;
        const config = {    //IMPORTANTE::: DEBE TENER ESTE FORMATO
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        // Aqui se hace la peticion 
        const response = await clienteAxios("/veterinarios/perfil", config);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data.msg);
      }

