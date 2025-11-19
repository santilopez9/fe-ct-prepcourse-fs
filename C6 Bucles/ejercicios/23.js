function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
 for(let i = 2; i < numero; i++){
  if(numero % i === 0){
    return false;
  }
 }
 // se saca del for para que continue la interaccion hasta i-num
 // ya que si se deja dentro solo iria hasta el 2 y si no es divisible 
 // entre dos, retorna true
 return true;
}

module.exports = esNumeroPrimo;
