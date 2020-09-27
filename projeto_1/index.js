const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
  '.', '?', '-', ',', '"', '', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'
]

const mesclarConteudos = conteudos => conteudos.join('')
const separarPorLinhas = todoConteudo => todoConteudo.split('\n')

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
  .then(mesclarConteudos)
  .then(separarPorLinhas)
  .then(fn.removerElementoSeVazio)
  .then(fn.removerElementoSeIncluir( '-->'))
  .then(fn.removerElementoSeApenasNumero)
  .then(fn.removerSimbolos(simbolos))
  .then(console.log)