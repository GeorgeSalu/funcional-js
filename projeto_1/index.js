const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const simbolos = [
  '.', '?', '-', ',', '"', '', '_', '<i>',
  '</i>', '\r', '[', ']', '(', ')'
]

// usando decomposicao de funcoes
fn.composicao(
  fn.lerDiretorio,
  fn.elementosTerminadosCom('.srt'),
  fn.lerArquivos,
  fn.mesclarConteudos,
  fn.separarTextoPor('\n'),
  fn.removerElementoSeVazio,
  fn.removerElementoSeIncluir('-->'),
  fn.removerElementoSeApenasNumero,
  fn.removerSimbolos(simbolos),
  fn.mesclarConteudos,
  fn.separarTextoPor(' '),
  fn.removerElementoSeVazio,
  fn.removerElementoSeApenasNumero,
  fn.agruparElementos,
  fn.ordenarPorAtributoNumerico('qtde'),
  console.log
)(caminho)

/* usando promisse
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
*/