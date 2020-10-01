/**
 * diz-se que uma linguagem de programação possui
 * funcções de primeira classe quando funções nessa
 * linguagem são tratadas como qualquer outra variavel
 *
*/

const x = 3
const y = function(txt) {
  return `esse é o texto : ${txt}`
}

const z = () => console.log('xxxxx')

console.log(x)
console.log(y('ola'))
z()