/**
 * closure é quando uma função "lembra"
 * seu escopo lexico, mesmo quando a funcção
 * é executada fora desse escopo lexico
 */

 const somarXMais3 = require('./closure_escopo')

 let x = 11
 console.log(somarXMais3())