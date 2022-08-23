const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const handleRequest = (req, res) => {
	fs.readFile('./index.html', function(err, data) {
		res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
		res.write(data);
		res.end();
	});
};

const server = http.createServer(handleRequest);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
