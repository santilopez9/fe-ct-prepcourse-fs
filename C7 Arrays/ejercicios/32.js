function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const textoLimpio = string.toLowerCase();
  for (let i = 0; i < string.length/2; i++){
    const derecho = textoLimpio.length -1 - i;
    if(textoLimpio[i] !== textoLimpio[derecho]){
      return false;
    }
  }
  return true;


}

module.exports = esPalindromo;