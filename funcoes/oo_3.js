// funcao construtora
function Produto(nome, preco, desc = 0.15) {
  this.nome = nome
  this.preco = preco
  this.desc = desc

  this.precoFinal = function() {
    return this.preco * (1 - this.desc)
  }
}

Produto.prototype.log = function() {
  console.log(`nome: ${this.nome} preco: R$ ${this.preco}`)
}

const p1 = new Produto('caneta', 5)
const p2 = new Produto('geladeira', 15)

console.log(p1.nome)
p1.log()

console.log(p2.preco)
console.log(p2.precoFinal())