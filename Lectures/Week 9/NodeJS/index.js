  
const http = require('http');
const fs=require("node:fs");
const hostname = '127.0.0.1';
const port = 3000;

var home=fs.readFileSync("NodeJS\\home.html", "utf-8");

var contacts=fs.readFileSync("NodeJS\\contacts.html", "utf-8");
var about=fs.readFileSync("NodeJS\\about.html", "utf-8");


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  
  if(req.url=='/home')
  {
  res.end(home); //loading conent from file after eading
  }
  else if(req.url=='/about')
  {
  res.end(about); //loading conent from file after eading
  }
  else if(req.url=='/contacts')
  {
  res.end(contacts); //loading conent from file after eading
  }
  else {
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});