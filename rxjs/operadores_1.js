// Os dois tipos...

 //1. operadores de criação
const { of } = require('rxjs')

// 2. operadores de encadeamento (pipeable op.)
const { last } = require('rxjs/operators')

of(1,2, 'ana', false, 'ultimo')
  .pipe(last())
  .subscribe(function(valor) {
    console.log(`o valor gerado foi ${valor}`)
  })