const numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];

const pares = numero => !(numero % 2)
const numerosPares = numeros.filter(pares)
console.log(numerosPares)