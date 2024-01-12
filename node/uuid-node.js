



Desde la versión v14.17 de Node.js uuid está disponible de forma nativa. de hecho, es tres veces más rápido usar la forma nativa con respecto a usar el package.


    import { randomUUID } from 'crypto';
    console.log(randomUUID());
