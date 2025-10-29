import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NotFound from "./components/NotFound.jsx";
import LogIn from "./components/LogIn.jsx";
import ViewPosts from "./components/ViewPosts.jsx";
import AddPost from "./components/AddPost.jsx";
import EditPost from "./components/EditPost.jsx";
import ViewPostDetails from "./components/ViewPostDetails.jsx";
import SignUp from "./components/SignUp.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Settings from "./components/Settings.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFound /> },
  { path: "/login", element: <LogIn /> },
  { path: "/posts", element: <ViewPosts /> },
  { path: "/posts/add", element: <AddPost /> },
  { path: "/posts/edit/:postId", element: <EditPost /> },
  { path: "/posts/view/:id", element: <ViewPostDetails /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/user", element: <UserProfile /> },
  { path: "/settings", element: <Settings /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
