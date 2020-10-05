const readline = require('readline')

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise(resolve => {
    rl.question(pergunta, resp => {
      resolve(resp)
    })
  })
}

function namorada() {
  console.log('n: apagar as luzes')
  console.log('n: pedir silencio')
  console.log('n: surpresa')
}

function sindico() {
  console.log('s: monitorando barulho')
}

function porteiro(interessados) {
  while(true) {
    const resp = await obterResposta('o namorado chegou? (s/n/q) ')
    if(resp.toLowerCase() === 's') {
      (interessados || []).forEach(obs => obs())
    } else if(resp.toLowerCase() === 'q') {
      break
    }
  }
}

porteiro([namorada, sindico])