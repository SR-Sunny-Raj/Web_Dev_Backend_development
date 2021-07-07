const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('Node.js\\creating custom backend\\index.html');
const contact = fs.readFileSync(
  'Node.js\\creating custom backend\\contact.html'
);
const services = fs.readFileSync(
  'Node.js\\creating custom backend\\services.html'
);
const about = fs.readFileSync('Node.js\\creating custom backend\\about.html');
const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;
  req.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  if (url == '/') {
    res.end(home);
  } else if (url == '/contact.html') {
    res.end(contact);
  } else if (url == '/services.html') {
    res.end(services);
  } else if (url == '/about.html') {
    res.end(about);
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
