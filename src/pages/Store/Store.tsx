import { FC } from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { ItemsList } from "../../components/ItemsList/ItemsList";
import { ItemProvider } from "../../context/ItemContext/ItemProvider";
import { PaginationProvider } from "../../context/PaginationContext/PaginationProvider";
import style from "./Store.module.scss";

const Store: FC = () => {
  return (
    <div className={style["store"]}>
      <ItemProvider>
        <ItemsList />
      </ItemProvider>

      <PaginationProvider>
        <Pagination />
      </PaginationProvider>
    </div>
  );
};

export default Store;
