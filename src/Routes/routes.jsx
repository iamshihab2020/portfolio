import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Pages/Home/Home/Home";
import ProjectsDetails from "../Components/Pages/Projects-Details/ProjectsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/#skill", element: <Home /> },
      { path: "/#contact", element: <Home /> },
      {
        path: "/project-details/:id",
        element: <ProjectsDetails />,
        loader: ({ params }) => fetch(`/projects.json/${params.id}`),
      },
    ],
  },
]);

export default router;
