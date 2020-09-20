const filmes = [
    {titulo: 'Titanic', duracao: 195, nota: 7.5},
    {titulo: 'The Avengers', duracao: 203, nota: 9.5},
    {titulo: 'Bean', duracao: 90, nota: 6.5}
]

const filmeNota = filme => filme.nota >= 8

const filmesBom = filmes.filter(filmeNota)
console.log(filmesBom)