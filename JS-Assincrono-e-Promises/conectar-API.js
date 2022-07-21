/* 
	Conectar API com HTTPS e Callback
*/
const https = require('http')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

https.get(API, res => {
	console.log(res.statusCode) /* status 200. executado após a conexão */
})

console.log('conectando API') /* Mensagem de log aparecerá primeiro */