const carrinho = [
  { nome: 'caneta', qtde: 10, preco: 7.99 },
  { nome: 'impressora', qtde: 0, preco: 649.50 },
  { nome: 'caderno', qtde: 4, preco: 27.10 },
  { nome: 'lapis', qtde: 3, preco: 5.82 },
  { nome: 'tesoura', qtde: 1, preco: 19.10 }
]

const qtdeMaiorQueZero = item => item.qtde > 0
const produtosValidos = carrinho.filter(qtdeMaiorQueZero)
console.log(produtosValidos)