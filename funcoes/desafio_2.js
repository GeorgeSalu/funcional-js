const carrinho = [
  { nome: 'caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'impressora', qtde: 1, preco: 649.50, fragil: true },
  { nome: 'caderno', qtde: 4, preco: 27.10, fragil: false },
  { nome: 'lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'tesoura', qtde: 1, preco: 19.10, fragil: true }
]

// filter, map, reduce

// 1. fragil: true
// 2. qtde 4,preco: 27.10 -> total
// 3. media totais
const fragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
  const novaQtde = acc.qtde + 1
  const novoTotal = acc.total + el
  return {
    qtde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde
  }
}
const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
  .filter(fragil)
  .map(getTotal)
  .reduce(getMedia, mediaInicial)

console.log(media)