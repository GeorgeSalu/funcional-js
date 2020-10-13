const { of, Observable } = require('rxjs')

function terminadoCom(textoFinal) {
  // implementar
}

of('ana silva', 'maria silva', 'pedro rocha')
  .pipe(terminadoCom('silva'))
  .subscribe(console.log)