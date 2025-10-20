import { createBrowserRouter } from "react-router";
import Homelayouts from "../Layout/Homelayouts";
import Home from "../Page/Home";
import CatagorysNews from "../Page/CatagorysNews";
import NewsDetlise from "../Page/NewsDetlise";
import FormetLayout from "../Layout/FormetLayout";
import LogingPag from "../Components/SignpuLayout/LogingPag";
import Register from "../Components/SignpuLayout/Register";

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
    path:"/new_detlise/:id",
    element: <NewsDetlise></NewsDetlise>,
     loader: () => fetch("/news.json")
  },
  {
    path:"/formet",
    element: <FormetLayout></FormetLayout>,
    children:[
        {
          path:"login",
          element:<LogingPag></LogingPag>
        },
        {
          path:"register",
          element:
            <Register></Register>
        }
    ]
  },
  {
    path: "/*",
    element: <h2>This Paghes Not Founds 404</h2>
  }
]);
