

Tenemos que instalar nodemailer con npm i --save nodemailer

import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const info = await transport.sendMail({
    from: "APV - Administrador de pacientes de veterinaria",
    to: email,
    subject: "Confirma tu cuenta",
    text: `Hola ${nombre}, confirma tu cuenta`,
    html: `
          <h1>Confirma tu cuenta</h1>
          <p>Para confirmar tu cuenta haz click en el siguiente enlace</p>
          <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar mi cuenta</a>
        `,
  });
};

export default emailRegistro;


En la pagina de Nodemailer tenemos las credenciales y las pasamos al archivo .env



