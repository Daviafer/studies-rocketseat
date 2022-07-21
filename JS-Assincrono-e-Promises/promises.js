/* 
Promessa de que algo irá acontecer.
Poderá dar certo ou errado, mas irá acontecer
*/
let aceitar = false

console.log('Pedir Uber')
const promessa = new Promise((resolve, reject) => {
  if (aceitar){
    return resolve('Pedido aceito!')
  }
  return reject('Pedido negado!')
})

promessa
// Promessa é rejeitada e usamos o catch() para capturar o erro
.then(result => console.log(result))
.catch(erro => console.log(erro))

.finally(() => console.log('Finalizado!'))


console.log('Aguardando...')