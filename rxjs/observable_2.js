const { Observable } = require('rxjs')

const obs = Observable.create(subscriber => {
  subscriber.next('rxjs')
  subscriber.next('é')
  subscriber.next('bem')
  subscriber.next('poderoso')

  if(Math.random() > 0.5) {
    subscriber.complete()
  } else {
    subscriber.error('que problema')
  }
})

obs.subscribe(
  valor => console.log(`Valor: ${valor}`),
  erro => console.log(`erro: ${erro}`),
  () => console.log('fim')
)

// uma segunda forma usando objeto
obs.subscribe({
  next(valor) {
    console.log(`valor : ${valor}`)
  },
  error(msg) {
    console.log(`Erro: ${msg}`)
  },
  complete() {
    console.log('fim')
  }
})