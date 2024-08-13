import { FC } from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { ItemsList } from "../../components/ItemsList/ItemsList";
import { PaginationProvider } from "../../context/PaginationContext/PaginationProvider";
import style from "./Store.module.scss";

const Store: FC = () => {
  return (
    <div className={style["store"]}>
      <ItemsList />

      <PaginationProvider>
        <Pagination />
      </PaginationProvider>
    </div>
  );
};

export default Store;
