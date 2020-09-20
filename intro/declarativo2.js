const alunos = [
    { nome: 'ana', nota: 9.5 },
    { nome: 'bia', nota: 7.3 },
    { nome: 'gil', nota: 5.8 },
    { nome: 'leo', nota: 7.6 },
    { nome: 'gui', nota: 9.1 },
    { nome: 'lia', nota: 4.9 },
    { nome: 'rui', nota: 7.0 }
]
const estaAprovado = aluno => aluno.nota >= 7

const aprovados = alunos.filter(estaAprovado)
console.log(aprovados)