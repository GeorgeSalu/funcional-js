class Produto {

  constructor(nome, preco, desc = 0.15) {
    this._nome = nome
    this.preco = preco
    this.desc = desc
  }

  get nome() {
    return `Produto: ${this._nome}`
  }

  set nome(novoNome) {
    this._nome = novoNome.toUpperCase()
  }

  get precoFinal() {
    return this.preco * (1 - this.desc)
  }

}

const p1 = new Produto('caneta', 5)
const p2 = new Produto('geladeira', 15)

console.log(p1.nome)
console.log(p2.preco)
console.log(p2.precoFinal)

console.log(typeof Produto)