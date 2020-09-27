const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
  .then(conteudos => conteudos.join(''))
  .then(todoConteudo => todoConteudo.split('\n'))
  .then(fn.removerElementoSeVazio)
  .then(fn.removerElementoSeIncluir( '-->'))
  .then(fn.removerElementoSeApenasNumero)
  .then(console.log)