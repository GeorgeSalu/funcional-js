// wrapper

const nums = [1,2,3,4,5,6]

const novosNums = nums.map(el => el + 10)

console.log(nums, novosNums)

function TipoSeguro(valor) {
  return {
    valor,
    map(fn) {
      const novoValor = fn(this.valor)
      return TipoSeguro(novoValor)
    }
  }
}

const resultado = TipoSeguro('esse é um texto')
  .map(t => t.toUpperCase())

console.log(resultado.valor)
