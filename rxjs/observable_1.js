const {Observable} = require('rxjs')

const promise = new Promise(resolve => {
  resolve('promise é bem legal')
})

promise.then(console.log)

const obs = new Observable(subscriber => {
  subscriber.next('observer')
  subscriber.next('é')
  subscriber.next('bem')
  subscriber.next('legal')
})

obs.subscribe(console.log)