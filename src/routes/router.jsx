import { createBrowserRouter } from "react-router-dom";
import Welcome from "../Pages/Welcome";
import MainPageLayout from "../Layout/MainPageLayout";
import HomePage from "../Pages/HomePage";
import NewPostPage from "../Pages/NewPostPage";

export const mainRoute = createBrowserRouter([
  {
    element: <Welcome />,
    path: "/",
  },

  {
    element: <MainPageLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/newpost",
        element: <NewPostPage />,
      },
    ],
  },
]);
