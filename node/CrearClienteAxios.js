
La ventaja de crear un cliente axios es que podemos poner una URL de base para no
llamar a las rutas enteras, aparte de otras configuraciones de base

import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
    });


export default clienteAxios;


Y llamamos a clienteAxios de esta manera:

  const url = `/veterinarios/confirmar/${id}`;
        const { data } = await clienteAxios(url);

O de esta otra: 
  await clienteAxios.post('/veterinarios', {nombre,email,password})


