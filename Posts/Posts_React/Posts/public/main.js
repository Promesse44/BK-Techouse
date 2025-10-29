// import { createElement } from "react";

// import { json } from "express";

const main = document.querySelector(".main");
const log = document.querySelector(".login_btn");
const loginSection = document.querySelector(".login_section");
const addSection = document.querySelector(".add_section");
const logout = document.querySelector(".logout_btn");
const loginButton = document.getElementById("login");
const signupSection = document.querySelector(".signup_section");
const signupButton = document.querySelector(".send_signup");
const signup = document.querySelector(".signup_btn");
const editSection = document.querySelector(".edit-section");

// window.addEventListener("load", fetchPosts);

loginButton.addEventListener("click", () => {
  loginSection.setAttribute("style", "display: none");
  login();
});

log.addEventListener("click", () => {
  loginSection.setAttribute("style", "display: block");
  log.setAttribute("style", "display: none");
  signup.setAttribute("style", "display: none");
});

signup.addEventListener("click", () => {
  signupSection.setAttribute("style", "display: block");
});

signupButton.addEventListener("click", () => {
  signupSection.setAttribute("style", "display: none");
  signUp();
});

// login function
async function login() {
  const mail = document.getElementById("user_email").value;
  const code = document.getElementById("user_password").value;

  const login = await fetch("/api/login", {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ email: mail, password: code }),
  });
  const data = await login.json();
  console.log(data);

  // console.log(data.token)

  if (login.ok) {
    alert("Login successful");
    localStorage.setItem("token", data.token);

    // document.querySelector(".login_section").style.display = "none";
    logout.setAttribute("style", "display: block");
    addSection.setAttribute("style", "display: block");
    main.setAttribute("style", "display: block");
    fetchPosts(data.token);
  } else {
    alert(data.error);
  }
}

// Signup function
async function signUp() {
  const names = document.querySelector(".new_name").value;
  const mail = document.querySelector(".new_email").value;
  const code = document.querySelector(".new_password").value;

  const addUser = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: names, email: mail, password: code }),
  });

  const response = await addUser.json();
  console.log(response);

  if (addUser.ok) {
    // alert(JSON.stringify(response));
    alert(response.message, response.data);
  }
}

// logout
async function logOut() {
  localStorage.removeItem("token");
  addSection.setAttribute("style", "display: none");
  log.setAttribute("style", "display: block");
  logout.setAttribute("style", "display: none");
  main.setAttribute("style", "display: none");
  signup.setAttribute("style", "display: block");
  // fetchPosts();
}

// displaying all Posts
async function fetchPosts(token) {
  const getToken = token ? token : localStorage.getItem("token");

  const send = await fetch("/api/posts", {
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken ? `Bearer ${getToken}` : "",
    },
  });

  const json = await send.json();

  const TotalPosts = json.length;
  console.log(json);

  const elt = document.createElement("h1");
  elt.textContent = TotalPosts;
  // document.body.append(elt);

  // const h2 = document.getElementById("header");
  // h2.textContent = TotalPosts;

  let htmls = `<h1>${TotalPosts}</h1><ul>`;

  json.forEach((item) => {
    htmls += `<li data-id="${item.post_id}" style="display: flex; padding: 10px; border-bottom: 1px solid #ddd; margin-bottom: 20px;">
    <div style="display: flex">${item.post_id}. <strong>${item.title} </strong> posted by  <strong>${item.user_name}</strong></div>
     <div  style="margin-left: 30px; display: flex;">
     <button data-action='edit' data-id='${item.post_id}' class="edit-button" onclick="modifyPost(${item.post_id}, '${item.title}');">Edit</button>
      <button data-action='delete' data-id='${item.post_id}' class="delete-button" onclick= "deletePost(${item.post_id}, '${item.title}')">Delete</button>
     </div>
    </li>`;
  });

  htmls += "</ul>";

  main.innerHTML = htmls;
  // console.log(json.length);
}

// const addButton = document.getElementById("addPost");

// Adding Post
async function addPosts() {
  const token = localStorage.getItem("token");
  const input = document.querySelector("#input").value;
  const newPost = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title: input }),
  });

  const json = await newPost.json();

  if (newPost.ok) {
    fetchPosts();
  }
}

function modifyPost(id, title) {
  
  editSection.setAttribute("style", "display: block; margin-top: 30px;");

  const editInput = document.querySelector(".edit-section input");
  editInput.setAttribute("data-id", id);
  //  editInput.setAttribute('value', title);
  editInput.value = title;

  const editPostButton = document.querySelector(".update-btn");

  if (editPostButton) {
    editPostButton.addEventListener("click", function () {
      // const editInput = document.querySelector(".edit-section input");
      const value = editInput.value;

      const id = editInput.getAttribute("data-id");

      return editPost(id, value);
      // console.log(id, value);
    });
  }
}

// edit post
async function editPost(id, title) {
  const token = localStorage.getItem("token");

  const editPost = await fetch(`/api/posts/${id}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title: title }),
  });

  const json = await editPost.json();
  console.log(json);

  if (editPost.ok) {
    fetchPosts();
    editSection.setAttribute("style", "display: none;");
    // editInput.value != title;

    const editInput = document.querySelector(".edit-section input");
    editInput.removeAttribute("data-id");
    editInput.value = "";
    alert(JSON.stringify(json, null, 2));
  } else {
    alert(JSON.stringify(json, null, 2));
  }
}

// delete posts
async function deletePost(id, title) {
  const token = localStorage.getItem("token");
  const post = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await post.json();

  alert(data.message);

  fetchPosts();
}
