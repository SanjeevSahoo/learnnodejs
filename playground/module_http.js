const http = require("http");

const server = http.createServer((req, res) => {
  console.log(res);
  res.write("Welcome to Node Server");
  res.end();
});

server.listen(3000);
