const numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];

const impares = numero => numero % 2
const numerosImpares = numeros.filter(impares)
console.log(numerosImpares)