import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const ViewPosts = () => {
  const getToken = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setReload(() => false);
      })
      .catch((error) => {
        console.log(error);
        setPosts([]);
      });
  }, [reload]);

  const onDelete = (id) => {
    fetch(`http://localhost:8000/api/posts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${getToken}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        setReload(true);
      });
  };

  return (
    <div className="view">
      <div className="title">
        <div className="title-left">
          <h3 className="app-name">My App</h3>
        </div>

        <div className="title-right">
          <Link to={"/"} className="homeLink">
            <p>Home</p>
          </Link>
          <Link to={"/settings"} className="homeLink">
            <p>Settings</p>
          </Link>
          <div className="leftButn">
            <Link to="/posts/add">
              <button className="btn newPost">Create New Post</button>
            </Link>
            <Link to={"/user"}>
              <button className="btn userBtn" />
            </Link>
          </div>
        </div>
      </div>

      <div className="post-div">
        <div className="post-top-div">
          <h1>My Posts</h1>
          <p id="view-p" className="viewPost-p">
            A list of all your posts.
          </p>
        </div>
        <div>
          <table className="table">
            <tbody>
              <tr className="tableRow">
                <td className="tableData">
                  <strong>Title</strong>
                </td>
                <td className="tableData">
                  <strong>Description</strong>
                </td>
                <td className="tableData">
                  <strong>Actions</strong>
                </td>
              </tr>
              {posts.map((post) => (
                <tr className="tableRow" key={post.post_id}>
                  <td className="tableData">{post.title}</td>
                  <td className="tableData">{post.description}</td>
                  <td className="tableData" id="tableAction">
                    <Link to={`/posts/view/${post.post_id}`}>View</Link>
                    <Link to={`/posts/edit/${post.post_id}`}>Edit</Link>
                    <Link
                      to={"#"}
                      className="deleteBtn"
                      onClick={() => onDelete(post.post_id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewPosts;
