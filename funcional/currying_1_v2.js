function textoComTamanhoEntre(min) {
  return function(max) {
    return function(erro) {
      return function(texto) {
        const tamanho = (texto || '').trim().length

        if(tamanho < min || tamanho > max) {
          throw erro
        }
      }
    }
  }
}

const p1 = { nome: 'a', preco: 14.99, desc: 0.25 }
textoComTamanhoEntre(4, 225, 'nome invalido', p1.nome)