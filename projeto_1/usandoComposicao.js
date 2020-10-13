/**
 * criar o mesmo fluxo do arquivo index.js usando composição
 *
*/

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