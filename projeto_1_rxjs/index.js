const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const simbolos = [
  '.', '?', '-', ',', '"', '', '_', '<i>',
  '</i>', '\r', '[', ']', '(', ')'
]

fn.lerDiretorio(caminho)
  .pipe(
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivo(),
    fn.separarTextoPor('\n')
  )
  .subscribe(console.log)
