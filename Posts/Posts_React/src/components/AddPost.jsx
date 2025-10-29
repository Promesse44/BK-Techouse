import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] =useState()
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onCreate = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, desc }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(JSON.stringify(data));
        navigate("/posts");
      });
  };
  const onCancel = (e) => {
    e.preventDefault();
    navigate("/posts");
  };
  return (
    <div className="create">
      <h2 className="addHeading">Create New Post</h2>
      <div className="addPostDiv">
        <form>
          <div className="upperAddPost">
            <p className="AddP">Title</p>
            <input
              type="text"
              className="AddInput"
              placeholder="Enter a title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="AddP">Content</p>
            <textarea
              type="text"
              className="textArea"
              rows={10}
              placeholder="Write your content here..."
              onChange={(e)=>setDesc(e.target.value)}
            />
          </div>

          <div className="addPostSubmitDiv">
            <div className="saveBtnDiv">
              <button className="saveBtn" onClick={onCreate}>
                Save
              </button>
            </div>
            <div className="cancelBtnDiv">
              <button className="cancelBtn" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
