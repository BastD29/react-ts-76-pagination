import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Home, NotFound, Store } from "./routes";
import { ItemProvider } from "../context/ItemContext/ItemProvider";
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
            <ItemProvider>
              <Store />
            </ItemProvider>
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
