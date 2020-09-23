function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro) {
      reject('ocorreu um erro')
    } else {
      resolve(valor)
    }
  } )
}

funcionarOuNao('testando', 0.1)
  .then(v => console.log(v))