  
const http = require('http');
var dt= require('./mymodule.js');
const fs=require("node:fs");
var text=fs.readFileSync("NodeJS\\card.html", "utf-8");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
 res.write("The date and time are currently: " + dt.myDateTime());
  res.write(req.url);
  res.end(text); //loading conent from file after eading
  
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});