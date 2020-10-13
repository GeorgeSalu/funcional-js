const {from, Observable} = require('rxjs')

function primeiro() {
  return function(source) {
    return Observable.create(subscriber => {
      source.subscribe({
        next(v) {
          subscriber.next(1)
        }
      })
    })
  }
}

function ultimo() {
  return function(source) {
    return Observable.create(subscriber => {
      source.subscribe({
        next(v) {
          subscriber.next(v + 2000)
        }
      })
    })
  }
}

from([1,2,3,4,5])
  //.pipe(primeiro())
  .pipe(ultimo())
  .subscribe(console.log)