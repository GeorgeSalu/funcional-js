function soma(a) {
  return function(b) {
    return function (c) {
      return a + b +c
    }
  }
}

//console.log(soma(1)(2)(3))

function textoComTamanhoEntre(min, max, erro, texto) {
  const tamanho = (texto || '').trim().length

  if(tamanho < min || tamanho > max) {
    throw erro
  }
}

const p1 = { nome: 'a', preco: 14.99, desc: 0.25 }
textoComTamanhoEntre(4, 225, 'nome invalido', p1.nome)