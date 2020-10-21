const path = require('path')
const fn = require('./funcoes')
const _ = require('lodash')
const { map, toArray } = require('rxjs/operators')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const simbolos = [
  '.', '?', '-', ',', '"', '', '_', '<i>',
  '</i>', '\r', '[', ']', '(', ')', '!'
]

fn.lerDiretorio(caminho)
  .pipe(
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivo(),
    fn.separarTextoPor('\n'),
    fn.removerElementoSeVazio(),
    fn.removerElementoSeIniciarComNumero(),
    fn.removerSimbolos(simbolos),
    fn.separarTextoPor(' '),
    fn.removerElementoSeVazio(),
    fn.removerElementoSeIniciarComNumero(),
    toArray(),
    fn.agruparElementos(),
    map(array => _.sortBy(array,el => el.qtde ))
  )
  .subscribe(console.log)
