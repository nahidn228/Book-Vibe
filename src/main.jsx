import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetail from "./Components/Books/BookDetail";
import ListedBooks from "./Components/Books/ListedBooks";
import DashBoard from "./Components/DashBoard";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import HomePage from "./Components/Home/HomePage";
import Root from "./Components/Root/Root";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
