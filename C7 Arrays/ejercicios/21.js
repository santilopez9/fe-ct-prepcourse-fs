function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  // Los meses que DEBEMOS encontrar (Referencia
  
  const mesesRequeridos = ["Enero", "Marzo", "Noviembre"]; 
  
  // Array de resultado, guardará los meses que SÍ se encontraron en el 'array' de entrada
  let mesesEncontrados = []; 

  // 1. Filtración: Recorremos el array de entrada para buscar coincidencias
  for (let i = 0; i < array.length; i++) {
    const mesActual = array[i];

    // Si el elemento actual es uno de los meses que necesitamos:
    if (mesesRequeridos.includes(mesActual)) {
      // Lo añadimos al array de resultados.
      mesesEncontrados.push(mesActual); 
    }
  }

  // 2. Verificación: Una vez terminado el bucle, verificamos si se cumplió el requisito.
  // Si la longitud del array de resultados es exactamente 3 (es decir, encontramos Enero, Marzo y Noviembre)...
  if (mesesEncontrados.length === 3) {
    
    // Devolvemos el array con los meses.
    return mesesEncontrados; 
    
  } else {
    
    // Si la longitud es 0, 1 o 2, es que falta al menos uno de los meses.
    return "No se encontraron los meses pedidos";
  }

}

module.exports = mesesDelAño;
