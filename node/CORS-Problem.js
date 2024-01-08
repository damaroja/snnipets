

Para permitir solo las peticiones de tu frontend y que todo siga un mismo esquema, recomiendo el uso de una variable de entorno en el backend
FRONTEND_URL='http://localhost:3000'
y en el index.js

    const dominiosPermitidos = [process.env.FRONTEND_URL]
    const corsOptions = {
        origin: function(origin, callback){
          if(!origin){//for bypassing postman req with  no origin
             return callback(null, true);
               }
            if(dominiosPermitidos.indexOf(origin) !== -1){
                // El origen del request esta permitido
                callback(null, true);
            }else{
                callback(new Error('No esta permitido por CORS'))
            }
        }
    }





app.use(cors(corsOptions))
