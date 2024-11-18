const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

let users = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Sam Johnson" },
];

app.use(express.json());

//app.get('/', (req, res, next) => {
//    res.send('Hi, there!');
//});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/express", (req, res, next) => {
  res.send(
    "Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült."
  );
});

app.get("/greeting", (req, res, next) => {
  res.send("Hello, Bürgés Csaba");
});

app.get("/nodejs", (req, res, next) => {
  res.send(
    "A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül."
  );
});

app.listen(PORT, () => {
  console.log(`A szerver a ${PORT}-es porton fut.`);
});
