function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero === 0){
    return false;
  }
  while(numero > 1){
    if (numero % 2 !== 0){
      return false;
    }
    //esto se usa para que corte el bucle infinito y el numero se 
    // vaya disminuyendo a la mitad desde el numero que empiece
    numero = numero / 2;
  }
  return true;
}

module.exports = esPotenciaDeDos;
