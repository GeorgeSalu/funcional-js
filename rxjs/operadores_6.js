const {from, Observable} = require('rxjs')


function createPipeableOperator(nextGenerator) {
  return function(source) {
    return Observable.create(subscriber => {
      source.subscribe({
        next: nextGenerator(subscriber)
      })
    })
  }
}

function primeiro() {
  return createPipeableOperator(subscriber => valor => {
      subscriber.next(valor)
      subscriber.complete()
  })
}

function nenhum() {
  return function(source) {
    return Observable.create(subscriber => {
      source.subscribe({
        next(v) {
          subscriber.complete()
        }
      })
    })
  }
}

function ultimo() {
  return function(source) {
    return Observable.create(subscriber => {
      let ultimo
      source.subscribe({
        next(v) {
          ultimo = v
        },
        complete() {
          if(ultimo !== undefined) {
            subscriber.next(ultimo)
          }
          subscriber.complete()
        }
      })
    })
  }
}

// desafio selecionar o ultimo elemento
from([1,2,3,4,5])
  .pipe(
    primeiro()
  )
  .subscribe(console.log)