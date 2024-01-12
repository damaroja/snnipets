


Este codigo se pone en el modelo para cuando el password se modifique, 
  poder rehasear el password
La libreria crypto es nativa de Node y se invoca con la siguiente linea:

import crypto from "crypto";

veterinarioSchema.pre('save', function(next){
  if(!this.isModified("password")){
    next()
    return
  }
  const hash =  crypto.createHash('sha512');
  const data =  hash.update(this.password, 'utf-8');
  this.password = data.digest('hex')
  next()
})
