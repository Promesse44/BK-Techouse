import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Wrapper } from "./Wrapper";

const ViewPostDetails = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/api/posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data[0]);
        setLoading(false);
        // console.log(post);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

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

  console.log(post);

  return (
    <div className="viewTitleDivHolder">
      <div className="viewTitleDiv">
        <div>
          <h4>Post Manager</h4>
        </div>
        <div>
          <Link to={"/posts"}>
            <button className="backToProfileBtn">
              <BiArrowBack className="backIcon" />
              Back to profile
            </button>
          </Link>
        </div>
      </div>

      <div></div>
      <div className="viewPostTitleDiv">
        <h1 className="viewPostTitleh1">{post.title}</h1>
        <p className="viewPostTitleP">By {post.user_name}</p>
      </div>
      <div className="viewPostContentDiv">
        <p>{post.description}</p>
      </div>
      <div className="editBtnDivHolder">
        <div className="editBtnDiv">
          <div className="EditBtnSubmitDiv">
            <Link to={`/posts/edit/${id}`}>
              <button className="EditBtnSubmit">Edit</button>
            </Link>
          </div>
          <div>
            <button className="DeleteBtnSubmit">
              <RiDeleteBin6Line className="DeleteIcon" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPostDetails;
