setTimeout(function() {
  console.log('executando callback...')

  setTimeout(function() {
    console.log('executando callback...')

    setTimeout(function() {
      console.log('executando callback')
    }, 2000)

  }, 2000)

}, 2000)

function esperarPor(tempo = 2000) {
  return Promise(function(resolve) {
    setTimeout(function() {
      resolve()
    }, tempo)
  })
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)