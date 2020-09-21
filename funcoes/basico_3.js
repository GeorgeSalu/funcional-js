// arrow function
const felizNatal = () => console.log('feliz natal')
felizNatal()

const saudacao = (nome) => "Fala "+nome+" !!!"
console.log(saudacao('maria'))

const somar = (...numeros) => {
  let total = 0
  for(let n of numeros) {
    total += n
  }
  return total
}

console.log(somar(1,2,3))
console.log(somar(1,2,3,4,5,6))
console.log(somar(1,2,3,4,5,6,7,8,9,10))