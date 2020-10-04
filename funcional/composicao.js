// composição de funções

function composicao(...fns) {
  return function(valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc)
    }, valor)
  }
}