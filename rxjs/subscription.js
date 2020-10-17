// procurar um operador de criação na documentação do rxjs capaz
// de esperar 3000 e gerar numeros de 500 em 500

const { timer } = require('rxjs')

const obs = timer(3000, 500)

const sub1 = obs.subscribe(num => {
  console.log(`#1 Gerou o numero ${num}`)
})

setTimeout(() => {
  sub1.unsubscribe()
}, 10000)