import { FC } from "react";
import style from "./ItemsList.module.scss";

const ItemsList: FC = () => {
  return (
    <div className={style["items-list"]}>
      <h2>Items list</h2>
    </div>
  );
};

export { ItemsList };
