const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const simbolos = [
  '.', '?', '-', ',', '"', '', '_', '<i>',
  '</i>', '\r', '[', ']', '(', ')'
]

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
  .then(fn.mesclarConteudos)
  .then(fn.separarTextoPor('\n'))
  .then(fn.removerElementoSeVazio)
  .then(fn.removerElementoSeIncluir('-->'))
  .then(fn.removerElementoSeApenasNumero)
  .then(fn.removerSimbolos(simbolos))
  .then(fn.mesclarConteudos)
  .then(fn.separarTextoPor(' '))
  .then(fn.removerElementoSeVazio)
  .then(fn.removerElementoSeApenasNumero)
  .then(fn.agruparElementos)
  .then(fn.ordenarPorAtributoNumerico('qtde'))
  .then(console.log)