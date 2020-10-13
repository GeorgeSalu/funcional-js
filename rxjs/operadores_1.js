// Os dois tipos...

 //1. operadores de criação
const { from } = require('rxjs')

// 2. operadores de encadeamento (pipeable op.)
const { last, map } = require('rxjs/operators')

from([1,2, 'ana', false, 'ultimo'])
  .pipe(
    last(),
    map(v => v[0])
  )
  .subscribe(function(valor) {
    console.log(valor)
  })