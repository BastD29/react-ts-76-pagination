import { FC } from "react";
import { Pagination } from "../../components/Pagination/Pagination2";
import { ItemsList } from "../../components/ItemsList/ItemsList2";
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
