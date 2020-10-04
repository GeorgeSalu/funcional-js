// composição de funções

function composicao(...fns) {
  return function(valor) {
    return fns.reduce( async (acc, fn) => {
      if(Promise.resolve(acc) === acc) {

        return fn( await acc)
      } else {
        return fn(acc)
      }
    }, valor)
  }
}

function gritar(texto) {
  return texto.toUpperCase()
}

function enfatizar(texto) {
  return `${texto} !!!!`
}

function tornarLento(texto) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(texto.split('').join(' '))
    }, 3000)
  })
}

const exagerado = composicao(
  gritar,
  enfatizar,
  tornarLento
)

const umPoucoMenosExagerado = composicao(
  gritar,
  enfatizar
)

exagerado('para')
  .then(console.log)
umPoucoMenosExagerado('agora')
  .then(console.log)