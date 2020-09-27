const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho)
      arquivos =  arquivos.map(arquivo => path.join(caminho, arquivo))
      resolve(arquivos)
    }catch(e) {
      reject(e)
    }
  })
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'})
      resolve(conteudo.toString())
    } catch (e) {
      reject(e)
    }
  })
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(array, padrao) {
  return array.filter(el => el.endsWith(padrao))
}

function removerElementoSeVazio(array) {
  return array.filter(el => el.trim())
}

function removerElementoSeIncluir( padraoTextual) {
  return function(array) {
    return array.filter(el => !el.includes(padraoTextual))
  }
}

function removerElementoSeApenasNumero(array) {
  return array.filter(el => {
    const num = parseInt(el.trim())
    return num !== num
  })
}

module.exports = {
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  removerElementoSeVazio,
  removerElementoSeIncluir,
  removerElementoSeApenasNumero,
  elementosTerminadosCom
}