const pessoa = {
  nome: 'maria',
  altura: 1.76,
  cidade: 'sao paulo'
}

// atribuição por referencia
const novaPessoa = pessoa

novaPessoa.nome = 'joao'
novaPessoa.cidade = 'fortaleza'

console.log(pessoa)