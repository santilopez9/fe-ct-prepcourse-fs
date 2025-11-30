function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let multiplicador = [];
  for (let i = 0; i < array.length; i ++){
    multiplicador.push(array[i] * i);
  }
  return multiplicador;
}

module.exports = multiplicarElementosPorIndice;
