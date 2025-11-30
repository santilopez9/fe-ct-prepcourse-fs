function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let stringActivo = [];
  if(str1.length > 0){
    stringActivo.push(str1);
  }
  if(str2.length > 0){
    stringActivo.push(str2);
  }
  if(str3.length > 0){
    stringActivo.push(str3)
  }
  const longitudes = stringActivo.map(s => s.length);
  const longitudMaxima = Math.max(...longitudes);
  let resultado = "";
  for (let i = 0; i < longitudMaxima; i++){
    for(const s of stringActivo){
      if(s.length > i){
        resultado += s[i];
      }
    }

  }
  return resultado;
}

module.exports = combine;
