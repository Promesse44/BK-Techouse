import React, { useEffect, useState } from "react";

// const URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        posts.map((post) => {
          console.log(post.title); setTitle(post.title)
        });
      });
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <p>{title}</p>
    </>
  );
};

export default Posts;
