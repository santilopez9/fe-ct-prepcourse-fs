function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  let producto = 1;

  const inicio = Math.min(a, b);
  const fin = Math.max(a, b);

  for (let i = inicio; i <= fin; i++) {
    producto = producto * i;
  }

  if (producto === 0){
    return 0;
  }

  return producto;

}

module.exports = productoEntreNúmeros;