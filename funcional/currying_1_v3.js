function textoComTamanhoEntre(min) {
  return function(max) {
    return function(erro) {
      return function(texto) {
        // lazy evaluation
        const tamanho = (texto || '').trim().length

        if(tamanho < min || tamanho > max) {
          throw erro
        }
      }
    }
  }
}

function aplicarValidacao(fn,) {
  return function(valor) {
    // lazy evaluation
    try {
      fn(valor)
    } catch (e) {
      return {error: e}
    }
  }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('nome produto invalido')
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)

const p1 = { nome: 'a', preco: 14.99, desc: 0.25 }
const p2 = { nome: 'ab', preco: 14.99, desc: 0.25 }
console.log(validarNomeProduto(p1.nome))
console.log(validarNomeProduto(p2.nome))