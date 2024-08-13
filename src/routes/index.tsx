import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Home, NotFound, Store } from "./routes";
import { ItemProvider } from "../context/ItemContext/ItemProvider";
import { PaginationProvider } from "../context/PaginationContext/PaginationProvider";
import { FilterProvider } from "../context/FilterContext/FilterProvider";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "store",
        element: (
          <ItemProvider>
            <PaginationProvider>
              <FilterProvider>
                <Store />
              </FilterProvider>
            </PaginationProvider>
          </ItemProvider>
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
