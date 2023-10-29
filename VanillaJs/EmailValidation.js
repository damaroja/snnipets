function validarEmail(email) {
  // Expresión regular para validar direcciones de correo electrónico
  var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Usamos el método test() de la expresión regular para verificar si el email cumple con el patrón
  return expresionRegular.test(email);
}
