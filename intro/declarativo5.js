const convidados = [
    {nome: "Daniel", vip: true, idade: 21},
    {nome: "Gabriel", vip: true, idade: 54},
    {nome: "Felipe", vip: false, idade: 37}
]

const convidadoMaior = convidado => convidado.idade >= 30
const convidado = convidados.filter(convidadoMaior)

console.log(convidado)