import React, { useState, useEffect } from "react";
import ViewPosts from "./ViewPosts";
import { useNavigate, useParams } from "react-router-dom";
import { Wrapper } from "./Wrapper";

const EditPost = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { postId } = useParams();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const onEdit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/api/posts/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, desc }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(JSON.stringify(data.message));
        console.log(JSON.stringify(data));
        navigate("/posts");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8000/api/posts/${postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data[0])
        setTitle(data[0].title);
        setDesc(data[0].description);
        setLoading(false);
        // console.log(post);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  if (!post) {
    return (
      <Wrapper>
        <div>Post not found</div>
      </Wrapper>
    );
  }

  const onCancel = (e) => {
    e.preventDefault();
    navigate("/posts");
  };

  return (
    <>
      <div className="titleEdit">
        <p className="editP">Posts / </p>
        <p> Edit post</p>
      </div>
      <div className="editDiv">
        <h1>Edit Post</h1>
      </div>
      <div className="inputEditDiv">
        <p className="Editp">Title</p>
        <form onSubmit={onEdit}>
          <input
            type="text"
            className="editTitleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="Editp">Content</p>
          <textarea
            className="editTextAre"
            rows={10}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="saveEditDiv">
            <div className="editSaveDiv">
              <button className="saveEditBtn">Save Changes</button>
            </div>
            <div>
              <button
                type="submit"
                className="cancelEditBtn"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPost;
