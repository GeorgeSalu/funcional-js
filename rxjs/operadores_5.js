const { of, Observable } = require('rxjs')

function terminadoCom(parteFinal) {
  return function(fonte) {
    return Observable.create(subscriber => {
      fonte.subscribe({
        next(texto) {
          if(Array.isArray(texto)) {
            subscriber.next(
              texto.filter(el => el.endsWith(parteFinal))
            )
          }else if(texto.endsWith(parteFinal)) {
            subscriber.next(texto)
          }
        },
        error(e) {
          subscriber.error(e)
        },
        complete() {
          subscriber.complete()
        }
      })
    })
  }
}

of('ana silva', 'maria silva', 'pedro rocha')
  .pipe(terminadoCom('silva'))
  .subscribe(console.log)