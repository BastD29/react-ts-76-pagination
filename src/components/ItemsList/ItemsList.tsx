import { FC, useEffect } from "react";
import { useItemContext } from "../../hooks/useItemContext";
import ItemCard from "../ItemCard/ItemCard";
import { SET_ITEMS } from "../../constants/actions";
import style from "./ItemsList.module.scss";

const ItemsList: FC = () => {
  const {
    dispatch,
    state: { items },
  } = useItemContext();

  useEffect(() => {
    dispatch({ type: SET_ITEMS, payload: items });
  }, [items]);

  return (
    <div className={style["items-list"]}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export { ItemsList };
