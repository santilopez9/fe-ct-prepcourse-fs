function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let elementosVistos = {};

  for (let i = 0; i < numeros.length; i++){
    const numeroActual = numeros[i];
    if (elementosVistos.hasOwnProperty(numeroActual)){
      return numeroActual;
    }
    elementosVistos[numeroActual] = true;
  }

}

module.exports = encontrarElementoRepetido;