import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/posts";
// import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [title, setTitle] = useState("");
  //  const [title, setTitle] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  // const onAddList = () => {};

  const onShowAddTodoForm = () => {
    setShowAddTodoForm(true);
  };

  const onCloseAddTodoForm = () => {
    setShowAddTodoForm(false);
  };

  const onShowEditForm = (item) => {
    setShowAddTodoForm(false);
    setShowEditForm(true);
    setEditItemId(item.id);
    setEditTitle(item.title);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newItem = { title, id: Math.random() };
    const appendItems = items;
    appendItems.push(newItem);
    setItems(appendItems);
    // setItems((prev) => [...prev, newItem]);
    setTitle("");
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // console.log("items+++", items);

  // posts management____________________________________________________________________________
  const [posts, setPosts] = useState([]);
  const [showDiv, setshowDiv] = useState(false);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((post) => {
        setPosts(post);
      });
  };

  const onshowDiv = () => {
    fetchPosts();
    setshowDiv(true);
  };

  const [postTitle, setPostTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(null);
  const [newPost, setNewPost] = useState({});
  const [editPost, setEditPost] = useState("");
  const [deletePost, setDeletePost] = useState("");
  const [showEditPostForm, setShowEditPostForm] = useState(false);
  const [editPostId, setEditPostId] = useState(null);
  const [editPostBody, setEditPostBody] = useState("");
  const [editPostTitle, setEditPostTile] = useState("");

  const addPost = () => {
    const maxId = Math.max(...posts.map((post) => post.id));
    const nextId = maxId + 1;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title: postTitle, body: body, userId: userId }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((json) => {
        // json.id(nextId);
        setPosts((post) => [json, ...post]);
        setBody("");
        setUserId(null);
        alert(`post added`);
      })
      .catch((err) => alert("Adding post failed", err));
  };

  const onShowEditPostForm = (post) => {
    setEditPostId(post.id);
    setEditTitle(post.title);
    setUserId(post.userId);
    setShowEditPostForm(true);
  };

  const onSaveEditPost = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${editPostId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: editPostId,
        title: editPostTitle,
        body: editPostBody,
        userId: userId,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setPosts((prev) => prev.map((p) => (p.id === editPostId ? json : p)));

        setEditItemId(null);
        setEditPostTile("");
        setEditPostBody("");
      });
  };

  return (
    <>
      <h1>Posts</h1>
      <button onClick={onshowDiv}>Show post</button>
      {showDiv && (
        <div>
          <input
            type="text"
            placeholder="Enter post title"
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter description"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder=" User ID"
            min="1"
            max="10"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <button onClick={addPost}>Add Post</button>
          {posts.map((singlePost) => (
            <div key={singlePost.id}>
              <ul>
                <h4>
                  {singlePost.id}. {singlePost.title}
                </h4>

                <p>{singlePost.body}</p>
                <button onClick={() => onShowEditPostForm(singlePost)}>
                  Edit
                </button>

                {editPostId === singlePost.id && (
                  <form>
                    <input
                      type="text"
                      value={editPostTitle}
                      onChange={(e) => setEditPostTile(e.target.value)}
                    />
                    <input
                      type="text"
                      value={editPostBody}
                      onChange={(e) => {
                        setEditPostBody(e.target.value);
                      }}
                    />
                    <button onClick={onSaveEditPost}>Save</button>
                  </form>
                )}

                {/* <button onClick={onDeletePost}>Delete</button> */}
              </ul>
            </div>
          ))}
        </div>
      )}

      <button type="button" onClick={onShowAddTodoForm}>
        Add todo
      </button>
      {showAddTodoForm && (
        <div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={title}
              onChange={onChangeTitle}
              placeholder="Enter todo"
            />
            <button type="submit">save todo</button>
          </form>
        </div>
      )}

      <h1>Saved Todo Lists</h1>
      {items.length <= 0 && <div>No todo found</div>}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.title}
              <button className="edit" onClick={() => onShowEditForm(item)}>
                Edit
              </button>
              {showEditForm && editItemId === item.id && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setItems((prev) =>
                      prev.map((todo) =>
                        todo.id === editItemId
                          ? { ...todo, title: editTitle }
                          : todo
                      )
                    );
                    setShowEditForm(false);
                    setEditItemId(null);
                  }}
                >
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <button type="submit">Save Edit</button>
                </form>
              )}
              <button className="delete" onClick={() => onDelete(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <Posts />
    </>
  );
}

export default App;
