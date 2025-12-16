const express = require("express");

const app = express();
const port = 3000;

// Middleware for processing JSON request bodies
app.use(express.json());

// Example of a list of users for checking authorization
const users = [
  { username: "admin123", password: "admin123", role: "admin" },
  { username: "admin234", password: "admin234", role: "admin" },
  { username: "user123", password: "user123", role: "user" },
  { username: "user678", password: "user678", role: "user" },
];
let h1 = "";
let h2 = "";

app.use((req, res, next) => {
  h1 += " Hello1";
  next();
});

app.use((req, res, next) => {
  h2 += " Hello2";
  next();
});

app.get("/users", (req, res) => {
  res.status(200).send("<h1>Users Page</h1> <p>Welcome again!</p>" + h1 + h2);
});

app.get("/kuku", (req, res) => {
  res.status(200).send("<h1>Kuku Page</h1> <p>Welcome again!</p>" + h1 + h2);
});

// Start the server
app.listen(port, () => {
  console.log(`The application is running on port ${port}`);
});
