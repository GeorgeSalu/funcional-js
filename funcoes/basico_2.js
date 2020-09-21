function bomDia() {
  console.log('Bom dia')
}

const boaTarde =  function() {
  console.log('Bom tarde')
}

// passar uma função como param para outra funcao
function executarQualquerCoisa(fn) {
  if(typeof fn === 'function') {
    fn()
  }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// retornar uma funcao a partir de uma outra funcao

function potencia(base) {
  return function(exp) {
    return Math.pow(base, exp)
  }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

console.log(potencia(3)(4))