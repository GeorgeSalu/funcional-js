function eager(a, b) {

  // processamento mas pesado
  const fim = Date.now() + 2500
  while(Date.now() < fim) {}

  const valor = Math.pow(a, 3)
  return valor + b
}

function lazy(a) {

  // processamento mas pesado
  const fim = Date.now() + 2500
  while(Date.now() < fim) {}

  const valor = Math.pow(a, 3)
  return function(b) {
    return valor + b
  }
}

console.time('#1')
console.log(eager(3, 100))
console.log(eager(3, 100))
console.log(eager(3, 100))
console.timeEnd('#1')


console.time('#1')
const lazy3 = lazy(3)
console.log(lazy3( 100))
console.log(lazy3( 100))
console.log(lazy3( 100))
console.timeEnd('#1')