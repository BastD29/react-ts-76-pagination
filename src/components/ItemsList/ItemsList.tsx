import { FC } from "react";
import { useItemContext } from "../../hooks/useItemContext";
import ItemCard from "../ItemCard/ItemCard";
import style from "./ItemsList.module.scss";

const ItemsList: FC = () => {
  const {
    state: { items },
  } = useItemContext();

  return (
    <div className={style["items-list"]}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export { ItemsList };
