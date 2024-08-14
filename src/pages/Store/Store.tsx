import { FC } from "react";
import Pagination from "../../components/Pagination/Pagination2";
import ItemsList from "../../components/ItemsList/ItemsList3";
import Filter from "../../components/Filter/Filter";
import style from "./Store.module.scss";

const Store: FC = () => {
  return (
    <div className={style["store"]}>
      <Filter />
      <ItemsList />
      <Pagination />
    </div>
  );
};

export default Store;
