import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

export default routes;
