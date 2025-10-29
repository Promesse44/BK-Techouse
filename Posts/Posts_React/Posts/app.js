import express from "express";
import path from "path";
import { Pool } from "pg";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
dotenv.config();

import { fileURLToPath } from "url";
import { json } from "stream/consumers";
import { ok } from "assert";
import { create } from "domain";
import { error } from "console";
import { name } from "ejs";
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.use(express.json());
server.use(cors());
// server.use(cors());
// server.use("/api", routes);

// db connection

const dbOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

const pool = new Pool(dbOptions);

const client = pool.connect();

// middleware to verify token
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).send("Please login first");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.userId = decoded.userId;
    console.log(`Token for user Id: ${req.userId} verified.`);
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
}

// Getting all posts
server.get("/api/posts", verifyToken, async (req, res) => {
  try {
    const send = await pool.query(
      "SELECT post.title, post.post_id, post.description,  post.user_id, users.user_name FROM post INNER JOIN users ON post.user_id = users.user_id WHERE post.user_id = $1 ORDER BY post.post_id",
      [req.userId]
    );
    console.log(send.rowCount);
    console.log(send.rows);
    res.json(send.rows);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "internal server error" });
  }
});

// getting single post by id
server.get("/api/posts/:id", async (req, res) => {
  try {
    var id = parseInt(req.params.id);

    const send = await pool.query(
      "SELECT post.title, post.post_id, post.description , post.user_id, users.user_name FROM post INNER JOIN users ON post.user_id = users.user_id WHERE post.post_id = $1",
      [id]
    );

    res.json(send.rows);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
  // let post = posts.find((p) => p.id === id);

  // if (post) {
  //   res.json(post);
  // } else {
  //   res.status(404).send(`There is no post for ${id}`);
  // }
});

// creating new post
server.post("/api/posts", verifyToken, async (req, res) => {
  try {
    const user_id = req.userId;
    const title = req.body.title;
    const desc = req.body.desc;
    const created = new Date();
    if (user_id) {
      if (title) {
        const post = await pool.query(
          "INSERT INTO post (title, user_id, created_at , description) VALUES($1, $2, $3, $4)",
          [title, user_id, created, desc]
        );
        return res.json(`${title} post created`);
      } else {
        res.status(400).json({ message: "provide title" });
      }
    } else {
      res.status(401).json({ message: "Please login to create a post" });
    }
  } catch (error) {
    res.json(error);
  }

  // if (req.body.title) {
  //   const newPost = { id: posts.length + 1, title: req.body.title };
  //   posts.push(newPost);
  //   res.status(201).json(posts);
  //   return;
  // }
  // res.json({ message: "please generate a title." });
});

// editing post
server.post("/api/posts/:id", verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    const postId = parseInt(req.params.id);
    const new_title = req.body.title;
    const desc = req.body.desc;
    const new_updated = new Date();

    if (userId) {
      const checkPosts = await pool.query(
        "SELECT * FROM post WHERE user_id = $1",
        [userId]
      );
      console.log(checkPosts.rows);
      if (checkPosts.rows.length !== 0) {
        const yourPosts = await pool.query(
          "SELECT post_id FROM post WHERE user_id = $1",
          [userId]
        );
        const postArray = yourPosts.rows;
        const postIds = [];

        postArray.forEach((post) => {
          const postId = parseInt(post.post_id);
          postIds.push(postId);
        });
        console.log(postIds);

        if (postIds.includes(postId)) {
          const update = await pool.query(
            "UPDATE post SET title = $1, updated_at = $2, description = $3  WHERE post_id = $4 RETURNING *",
            [new_title, new_updated, desc, postId]
          );
          return res.json({
            message: "Post updated successfuly ",
            post_Updated_to: update.rows,
          });
        } else {
          res.status(401).send(`You do not have a post with id ${postId}.`);
        }
      } else {
        res.status(401).json({
          msg: "You do not have any post, first add a post to edit id",
        });
      }
    } else {
      res.status(403).send("Please login first");
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

// Delete post
server.delete("/api/posts/:id", verifyToken, async (req, res) => {
  try {
    const user_id = req.userId;
    const id = parseInt(req.params.id);

    if (user_id) {
      const check = await pool.query("SELECT * FROM users WHERE user_id =$1", [
        user_id,
      ]);

      if (check.rows.length !== 0) {
        const postsForUser = await pool.query(
          "SELECT post_id FROM post WHERE user_id = $1",
          [user_id]
        );
        const p = postsForUser.rows;
        const postIds = [];
        p.forEach((post) => {
          const postId = parseInt(post.post_id);
          postIds.push(postId);
          console.log(postIds);
        });

        if (postIds.includes(id)) {
          const dlt = await pool.query("DELETE FROM post WHERE post_id =$1", [
            id,
          ]);
          return res.json({ message: "post deleted successfully" });
        } else {
          res
            .status(401)
            .json({ message: `You do not have a post with this ID ${id}` });
        }
      } else {
        res.status(401).json({ message: "You do not have any post." });
      }
    } else {
      res.status(403).json({ message: "First log in before deleting post" });
    }
  } catch (error) {
    res.send(error);
  }
});

// Creating new user
server.post("/api/users", async (req, res) => {
  try {
    console.log("data+++", req.body);
    const user = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const hash = bcrypt.hashSync(password, 10);
    const createdAt = new Date();

    if (!user) {
      res.status(400).json({ msg: "Name missing" });
    } else if (!email) {
      res.status(400).json({ msg: "Email missing" });
    } else if (!password) {
      res.status(400).json({ msg: "Password missing" });
    } else {
      const newUser = await pool.query(
        "INSERT INTO users (user_name, email, user_password, created_at) VALUES($1,$2,$3, $4) RETURNING *",
        [user, email, hash, createdAt]
      );

      return res.json({
        message: "User created successfully",
        data: newUser.rows,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// creating jwt tokens
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "24h" });
};

// login
server.post("/api/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    // check if user exists
    if (!result.rows.length) {
      return res.status(401).json({ error: "User not found" });
    }
    const user = result.rows[0];

    const isValidPassword = await bcrypt.compare(password, user.user_password);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // generate token
    const token = generateToken(user.user_id);

    res.json({
      message: "Login successful",
      token,
      user: { id: user.user_id, name: user.user_name, email: user.email },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }

  // const token = generateToken(user.id);
  // res.json({token, user { id: user.id, user_name }});
  //   if (isValidPassword){
  //     const token = generateToken(user.id);
  //     res.json({ token, user: { id: user.id, username}});
  //   }else{
  //     res.status(401).json({error: 'Invalid credentials'});
  //   }
  // });

  // const verifyToken = (req, res, next) => {
  //   const token = req.headers['authirization']?.split(' ')[1];

  //   if(!token) {
  //     return res.status(401).json({error: 'Access denied'});
  //   }

  //   try {
  //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //     req.userId = decoded.userId;
  //     next();
  //   } catch (error) {
  //     read.status(401).json({error: 'Invalid token' });
  //   }
  // };
});

// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ error: "No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.userId;
//     next();
//   } catch (error) {
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// UPDATE user
server.put("/api/users", verifyToken, async (req, res) => {
  const user_id = req.userId;
  const user_name = req.body.name;
  const email = req.body.email;
  const updatedAt = new Date();

  try {
    if (!user_name) {
      res.send("Name missing.");
    } else if (!email) {
      res.json({ message: "Email missing." });
    } else {
      const post = await pool.query(
        "UPDATE users SET user_name=$1, email= $2, updated_at = $3  WHERE user_id = $4",
        [user_name, email, updatedAt, user_id]
      );
      return res.json({
        message: `User with id ${user_id} updated successfully.`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "server Error" });
  }
});

// Delete user
// server.delete("/api/users/:id", async (req, res) => {
//   const id = parseInt(req.params.id);
//   try {
//     const deleted = await pool.query("DELETE FROM users WHERE user_id = $1", [
//       id,
//     ]);
//     return res.json({ message: `User with id ${id} deleted successfully` });
//   } catch (error) {
//     res.json({ error });
//   }
// });

server.listen(port, () => {
  console.log(`Server Listening to port ${port}...`);
});
