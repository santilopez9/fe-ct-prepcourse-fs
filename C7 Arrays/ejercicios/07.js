function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  array.sort((a,b)=>{
    if(typeof a === "number" && typeof b ==="number"){
      return a - b;
    }
    if (a < b) return - 1;
    if (a > b) return 1;

    });
  
  return array;
}

module.exports = ordenarArray;
