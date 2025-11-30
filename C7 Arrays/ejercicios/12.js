function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  let resultado = []
  for(let i = 0; i < array.length; i++){
    const mayuscula = array[i].toUpperCase();
    resultado.push(mayuscula);
  }
  return resultado;
}

module.exports = convertirStringAMayusculas;
