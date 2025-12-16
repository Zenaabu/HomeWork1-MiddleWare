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

// a variables for adding the hello
let h1 = "";
let h2 = "";

// middleware for all paths that adds Hello1 to the string h1
app.use((req, res, next) => {
  h1 += " Hello1";
  next();
});

// middleware for all paths that adds Hello2 to the string h1
app.use((req, res, next) => {
  h2 += " Hello2";
  next();
});

// path 1 for "/users"
// when we send the string to the browser we add to it the strings h1 and h2
app.get("/users", (req, res) => {
  res.status(200).send("<h1>Users Page</h1> <p>Welcome again!</p>" + h1 + h2);
});

// path 2 for "/kuku"
// when we send the string to the browser we add to it the strings h1 and h2
app.get("/kuku", (req, res) => {
  res.status(200).send("<h1>Kuku Page</h1> <p>Welcome again!</p>" + h1 + h2);
});

// Start the server
app.listen(port, () => {
  console.log(`The application is running on port ${port}`);
});
