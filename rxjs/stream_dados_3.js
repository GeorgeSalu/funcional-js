const {interval} = require('rxjs')

const gerarNumeros = interval(500)

gerarNumeros.subscribe(num => {
  console.log(Math.pow(2, num))
})