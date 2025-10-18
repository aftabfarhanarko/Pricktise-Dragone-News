import { createBrowserRouter } from "react-router";
import Homelayouts from "../Layout/Homelayouts";
import Home from "../Page/Home";
import CatagorysNews from "../Page/CatagorysNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayouts></Homelayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/catagory/:id",
        element: <CatagorysNews></CatagorysNews>,
        loader: () => fetch("/news.json")
      },
    ],
  },
  {
    path: "/*",
    element: <h2>This Paghes Not Founds 404</h2>
  }
]);
