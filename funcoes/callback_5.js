const carrinho = [
  { nome: 'caneta', qtde: 10, preco: 7.99 },
  { nome: 'impressora', qtde: 0, preco: 649.50 },
  { nome: 'caderno', qtde: 4, preco: 27.10 },
  { nome: 'lapis', qtde: 3, preco: 5.82 },
  { nome: 'tesoura', qtde: 1, preco: 19.10 }
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => {
  return acc + el
}

const totaGeral = carrinho
  .map(getTotal)
  .reduce(somar)

console.log(totaGeral)

Array.prototype.meuReduce = function(fn, inicial) {
  let acc = inicial
  for(let i = 0;i < this.length;i++) {
    if(!acc && i === 0) {
      acc = this[i]
    } else {
      acc = fn(acc, this[i], i, this)
    }
  }
  return acc
}