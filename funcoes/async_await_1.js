function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('executando promise....')
      resolve()
    }, tempo)
  })
}

esperarPor(2000)
  .then(() => console.log('executando promise 1'))
  .then(esperarPor)
  .then(() => console.log('executando promise 2'))
  .then(esperarPor)

async function executar() {
  await esperarPor(1500)
  console.log('async/await 1...')

  await esperarPor(1500)
  console.log('async/await 1...')

  await esperarPor(1500)
  console.log('async/await 1...')
}

executar()