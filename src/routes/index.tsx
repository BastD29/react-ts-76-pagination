import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Home, NotFound, Store } from "./routes";
import { PaginationProvider } from "../context/PaginationContext/PaginationProvider";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "store",
        element: (
          <PaginationProvider>
            <Store />
          </PaginationProvider>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { routes };
