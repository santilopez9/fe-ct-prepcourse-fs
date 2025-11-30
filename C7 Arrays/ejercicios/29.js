function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros.length === 0){
  return null;
}
  for (let i = 1; i < numeros.length; i++){
    const numeroAnterior = numeros[i - 1];
    const numeroActual = numeros [i];

    // si el numero actual es distinto al anterior +1, es el hueco

    if(numeroActual != numeroAnterior + 1){
      return numeroAnterior + 1;
    }
  }
  return null;
}

module.exports = encontrarNumeroFaltante;