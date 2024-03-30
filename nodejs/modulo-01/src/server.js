import http from 'node:http';

const server = http.createServer((request, response) => {
  return response.end('Hello World');
});

server.listen(3333, () => {
  console.log('Server started on port 3333');
    console.log('http://localhost:3333');
});
