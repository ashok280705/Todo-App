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
  const db = client.db(dbName);
  const users = db.collection("users");
  const { owner, todo } = req.body;

  if (!owner || !todo) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  // ✅ Push todo with iscomplete defaulted to false
  const result = await users.updateOne(
    { username: owner },
    { $push: { todos: { todo, iscomplete: false } } }
  );

  if (result.modifiedCount === 1) {
    res.json({ success: true, message: "Todo added successfully" });
  } else {
    res.status(400).json({ success: false, message: "User not found or update failed" });
  }
});

app.get("/todo/:username", async (req, res) => {
  const db = client.db(dbName);
  const users = db.collection("users");
  const username = req.params.username;

  const user = await users.findOne({ username });

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  res.json({ success: true, todos: user.todos || [] });
});

app.delete("/todo", async (req, res) => {
  const { owner, todo } = req.body;

  if (!owner || !todo) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const db = client.db(dbName);
  const users = db.collection("users");

  const result = await users.updateOne(
    { username: owner },
    { $pull: { todos: { todo } } }
  );

  if (result.modifiedCount === 1) {
    res.json({ success: true, message: "Todo deleted successfully" });
  } else {
    res.json({ success: false, message: "Todo not found or deletion failed" });
  }
});

app.put("/todo", async (req, res) => {
  const { owner, oldTodo, newTodo } = req.body;

  if (!owner || !oldTodo || !newTodo) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const db = client.db(dbName);
  const users = db.collection("users");

  const result = await users.updateOne(
    {
      username: owner,
      "todos.todo": oldTodo
    },
    {
      $set: { "todos.$.todo": newTodo }
    }
  );

  if (result.modifiedCount === 1) {
    res.json({ success: true, message: "Todo updated successfully" });
  } else {
    res.status(404).json({ success: false, message: "Todo not found or update failed" });
  }
});

app.put("/todo/status", async (req, res) => {
  const { owner, todo, iscomplete } = req.body;

  if (!owner || typeof iscomplete !== "boolean" || !todo) {
    return res.status(400).json({ success: false, message: "Missing or invalid fields" });
  }

  const db = client.db(dbName);
  const users = db.collection("users");

  const result = await users.updateOne(
    {
      username: owner,
      "todos.todo": todo
    },
    {
      $set: { "todos.$.iscomplete": iscomplete }
    }
  );

  if (result.modifiedCount === 1) {
    res.json({ success: true, message: "Todo status updated successfully" });
  } else {
    res.status(404).json({ success: false, message: "Todo not found or update failed" });
  }
});

app.post("/login", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("users");
  const { username, password } = req.body;

  const user = await collection.findOne({ username, password });

  if (user) {
    res.status(200).json({ success: true, message: "Login successful", user });
  } else {
    res.status(401).json({ success: false, message: "Invalid username or password" });
  }
});

app.post("/register", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("users");
  const { username, password, Email } = req.body;

  const existingUser = await collection.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ success: false, message: "User already exists" });
  }

  const newUser = { username, password, Email, todos: [] };
  await collection.insertOne(newUser);

  res.status(201).json({ success: true, message: "User registered successfully", user: newUser });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});