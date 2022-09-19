// import http from "http";

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
import merhaba, { text, topla, cikar, user, users } from "./my-module.js";

console.log(topla(4,2));
console.log(cikar(4,2));
console.log(text);
console.log(user);
console.log(users);
merhaba("Faik");