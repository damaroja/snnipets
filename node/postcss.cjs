

Cuando aparezca este error: 


node:57664) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/home/damaroja/Escritorio/bienes raices/postcss.config.cjs:1
export default {

  Es que el problema esta en que postcss requiere modulo 
  Cambiar esto: 


    export default = // Cambiar esto 

      
    module.exports = {  // por esto 
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
     
