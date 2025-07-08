const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "TODO-APP";

client.connect();

app.post("/todo", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("todos");
  const { title, description } = req.body;})
  
app.post("/login", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("users");
    const { username, password } = req.body;    
    const user = await collection.findOne({ username, password });
    if (user) {
        res.status(200).json({ message: "Login successful", user });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});

app.post("/register", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("users");
    const { username, password } = req.body;
    const existingUser = await collection.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }
    const newUser = { username, password };
    await collection.insertOne(newUser);
    res.status(201).json({ message: "User registered successfully", user: newUser       })
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
