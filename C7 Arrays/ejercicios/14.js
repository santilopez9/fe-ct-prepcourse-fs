function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let mayores10 = [];
  var contador = 0;
  for (let i = 0; i < array.length; i ++){
    if (array[i] > 10){
      mayores10.push(array[i]);
      contador += 1;
    }
  }
  return contador;
}

module.exports = contarElementosMayoresA10;
