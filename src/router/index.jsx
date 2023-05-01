import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import { CocktailList } from "../components/CocktailList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cocktails",
    element: <CocktailList />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
