import { FC } from "react";
import { ItemType } from "../../types/item";
import style from "./ItemCard.module.scss";

type ItemCardPropsType = {
  item: ItemType;
};

const ItemCard: FC<ItemCardPropsType> = ({ item }) => {
  return (
    <div className={style["item-card"]}>
      <h3>{item.name}</h3>
    </div>
  );
};

export default ItemCard;
