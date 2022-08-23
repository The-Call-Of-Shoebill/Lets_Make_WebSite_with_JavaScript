const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const handleRequest = (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    const url = req.url;

    if (url === '/' || url === '/index.html') {
        fs.readFile('./data/index.html', function(err, data) {
            res.write(data);
            res.end();
        });
    } else if (url === '/about/' || url === '/about/index.html') {
        fs.readFile('./data/about.html', function(err, data) {
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('./data/404.html', function(err, data) {
            res.write(data);
            res.end();
        });
    }
};

const server = http.createServer(handleRequest);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
