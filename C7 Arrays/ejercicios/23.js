function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  let arreglo =[];
  let contador = 0;
  for (let i = 0; i < 10; i++){
    num += 2;
    contador += 1;
    if(num === contador){
      return "Se interrumpió la ejecución";
    }else{
      arreglo.push(num);
    }
  }
  return arreglo;
}

module.exports = breakStatement;
