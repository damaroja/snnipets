



Desde la versión v14.17 de Node.js uuid está disponible de forma nativa. de hecho, es tres veces más rápido usar la forma nativa con respecto a usar el package.


    import { randomUUID } from 'crypto';
    console.log(randomUUID());


Despues tenemos una funcion que podemos obtener un id mas o menos bueno:


Date.now().toString(32) + Math.random().toString(32).substring(2);


Tambien tenemos un modulo bueno para generar un ID bestia: 


import { randomUUID } from "crypto";

export const generarID = () => {
  const id =
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID() +
    randomUUID();
  return id.replace(/-/g, "");
};

console.log(generarID());
