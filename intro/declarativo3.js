const produtos = [
    {id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
    {id: 125, nome: 'Shorts', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
    {id: 456, nome: 'Tênis', cor: 'preto', tamanho: '41', categoria: 'Vestuário'},
    {id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria: 'Esporte'}
]

const produtoVestuario = produto => produto.categoria == 'Vestuário'

const produtosV = produtos.filter(produtoVestuario)
console.log(produtosV)