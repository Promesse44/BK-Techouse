import express from "express";
import path from "path";
import { Pool } from "pg";
import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from "url";
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.use(express.json());

// db connection

const dbOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
};

console.log('options++++', dbOptions);
const connection = new Pool(dbOptions);

const client = connection.connect();

let posts = [
  { id: 1, title: "Account" },
  { id: 2, title: "Story" },
  { id: 3, title: "Following" },
  { id: 4, title: "Followers" },
  { id: 5, title: "Exam" },
  { id: 6, title: "God" },
  { id: 7, title: "Jesus" },
  { id: 8, title: "Kigali" },
  { id: 9, title: "Tpurism" },
];

server.get("/api/posts", (req, res) => {
  res.json(posts);
});

server.get("/api/posts/:id", (req, res) => {
  var id = parseInt(req.params.id);
  let post = posts.find((p) => p.id === id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).send(`There is no post for ${id}`);
  }
});

server.post("/api/posts", (req, res) => {
  if (req.body.title) {
    const newPost = { id: posts.length + 1, title: req.body.title };
    posts.push(newPost);
    res.status(201).json(posts);
    return;
  }
  res.json({ message: "please generate a title." });
});

server.post("/api/posts/:id", (req, res) => {
  let id = parseInt(req.params.id);
  const newTitle = req.body.title;
  let post = posts.find((pst) => pst.id === id);

  if (post) {
    post.title = newTitle;
    res.json({ message: `The title of post with ID ${id} is updated.`, post });
    return;
  } else {
    res.json(`Can not find post with id ${id}`);
  }
});

server.delete("/api/posts/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let post = posts.find((pst) => pst.id === id);
  if (post) {
    const newPosts = posts.filter((item) => item.id !== Number(id));

    console.log(newPosts);
    posts = newPosts;

    res.json({ message: `Post ${id} deleted successfully`, posts });
    return;
  } else {
    res.json(`Can not find post with id ${id}.`);
  }
});

server.listen(port, () => {
  console.log(`Server Listening to port ${port}...`);
});
