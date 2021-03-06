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

// observer
function namorada() {
  console.log('n: apagar as luzes')
  console.log('n: pedir silencio')
  console.log('n: surpresa')
}

// observer
function sindico(evento) {
  console.log('s: monitorando barulho')
  console.log(`s: ${evento.resp}`)
}

// subject
function porteiro(interessados) {
  while(true) {
    const resp = await obterResposta('o namorado chegou? (s/n/q) ')
    if(resp.toLowerCase() === 's') {
      // os observadores são notificados
      (interessados || []).forEach(obs => obs({ resp, data: Date.now() }))
    } else if(resp.toLowerCase() === 'q') {
      break
    }
  }
}

// chamada da função que registra dois observadores
// os observadores são: [namorada, sindico]
// o subject é o porteiro
porteiro([namorada, sindico])