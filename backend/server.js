import express from "express";
import { chats } from "./data/data.js";
import dotenv from "dotenv";
import connectDB from "./conf/db.js";
console.log({ chats });

const app = express();
dotenv.config();
connectDB();
app.get("/", (req, res) => {
  res.send("Chitchats");
});
app.get("/api/chats", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  res.send(chats);
});
const PORT = process?.env?.PORT;
console.log({ PORT });

app.listen(PORT, console.log(`Chitchat listening at ${PORT} `));
