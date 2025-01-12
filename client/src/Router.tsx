import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CategoryDetail from "./pages/CategoryDetail";
import CategoryEdit from "./pages/CategoryEdit";
import CategoryIndex from "./pages/CategoryIndex";
import CategoryNew from "./pages/CategoryNew";
import ProgramDetail from "./pages/ProgramDetails";
import ProgramEdit from "./pages/ProgramEdit";
import ProgramIndex from "./pages/ProgramIndex";
import ProgramNew from "./pages/ProgramNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/categories",
        element: <CategoryIndex />,
      },
      {
        path: "/categories/new",
        element: <CategoryNew />,
      },
      {
        path: "/categories/:id",
        element: <CategoryDetail />,
      },
      {
        path: "/categories/:id/edit",
        element: <CategoryEdit />,
      },
      {
        path: "/programs",
        element: <ProgramIndex />,
      },
      {
        path: "/program/new",
        element: <ProgramNew />,
      },
      {
        path: "/program/:id",
        element: <ProgramDetail />,
      },
      {
        path: "/program/:id/edit",
        element: <ProgramEdit />,
      },
    ],
  },
]);
