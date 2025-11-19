function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  
  /*const longitud = num.toString().length;
  return longitud ===3;
  */

  return num >=100 && num <= 999;
  
}

module.exports = tieneTresDigitos;
