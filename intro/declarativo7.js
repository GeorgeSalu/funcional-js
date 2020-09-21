const nomes = ["Bruno", "Zezinho", "Fulano", "Douglas"];

const convidados = convidado => convidado.charAt(0) == 'Z'
const nomesConvidados = nomes.filter(convidados)
console.log(nomesConvidados)