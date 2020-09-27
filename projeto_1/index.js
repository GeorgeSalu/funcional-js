const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
  '.', '?', '-', ',', '"', '', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'
]

function agruparPalavras(palavras) {
  return palavras.reduce((agrupamento, palavra) => {
    const p = palavra.toLowerCase()
    if(agrupamento[p]) {
      agrupamento[p] += 1
    } else {
      agrupamento[p] = 1
    }
    return agrupamento
  }, {})
}

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
  .then(agruparPalavras)
  .then(console.log)