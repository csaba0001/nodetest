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

app.get("/", (req, res, next) => {
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

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User could not be found." });
  }

  res.status(200).json(user);
});

app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Forgot to give name." });
  }

  const nUser = {
    id: (users.length + 1).toString(),
    name: name,
  };

  users.push(nUser);
  res.status(201).json(nUser);
});

app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Forgot to give name." });
  }

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "Couldnt be foundd" });
  }

  users[userIndex].name = name;
  res.status(200).json(users[userIndex]);
});

app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "Cant find" });
  }

  users.splice(userIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`A szerver a ${PORT}-es porton fut.`);
});
