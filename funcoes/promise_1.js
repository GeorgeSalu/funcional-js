let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(['ana','bia','carlos','daniel'])
})

p
  .then(valor => valor[0])
  .then(primeiro => primeiro[0])
  .then(letra => letra.toLowerCase())
  .then(letraMinuscula => console.log(letraMinuscula))