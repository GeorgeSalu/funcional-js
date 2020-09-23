let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(['ana','bia','carlos','daniel'])
})

function primeiroElemento(array) {
  return array[0]
}

function primeiraLetra(string) {
  return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

p
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(letraMinuscula => console.log(letraMinuscula))