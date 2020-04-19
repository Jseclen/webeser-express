const http = require('http')


http.createServer((req, resp) =>{

	resp.writeHead(200, {'Content-Type':'application/json'})
	/*resp.write('hola mundo')*/

	let salida = {
		nombre: 'Jeysson',
		edad: 29,
		url: req.url
	}
	resp.write(JSON.stringify(salida))
	resp.end()
})
.listen(8080);

console.log('Escuchando puerto 8080')