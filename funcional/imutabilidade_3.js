const pessoa = {
  nome: 'maria',
  altura: 1.76,
  cidade: 'sao paulo',
  end: {
    rua:  'feliz'
  }
}

const outraPessoa = pessoa

// atribuição por referencia
function alterarPessoa(pessoa) {
  const novaPessoa = {...pessoa}
  novaPessoa.nome = 'joao'
  novaPessoa.cidade = 'fortaleza'
  novaPessoa.end.rua = 'abc'
  return novaPessoa
}

const novaPessoa = alterarPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a = 3
let b = a

a++