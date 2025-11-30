function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let duplicados = []
  for (let i = 0; i< array.length; i++){
    var num = array[i] * 2;
    duplicados.push(num);
  }
  return duplicados;
}

module.exports = duplicarElementos;
