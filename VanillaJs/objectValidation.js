function validarCamposNoVacios(objeto) {
  for (var propiedad in objeto) {
    if (!objeto.hasOwnProperty(propiedad)) continue; // Saltar las propiedades heredadas

    if (objeto[propiedad] === null || objeto[propiedad] === undefined || objeto[propiedad] === '') {
      return false; // Si al menos un campo está vacío, la validación falla
    }
  }
  return true; // Si todos los campos tienen valores, la validación es exitosa
}
