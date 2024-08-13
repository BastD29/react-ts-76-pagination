import { FC } from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { ItemsList } from "../../components/ItemsList/ItemsList";
import style from "./Store.module.scss";

const Store: FC = () => {
  return (
    <div className={style["store"]}>
      <ItemsList />
      <Pagination />
    </div>
  );
};

export default Store;
