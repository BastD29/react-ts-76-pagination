import { FC } from "react";
import { useItemContext } from "../../hooks/useItemContext";
import { usePagination } from "../../hooks/usePagination2";
import ItemCard from "../ItemCard/ItemCard";
import style from "./ItemsList.module.scss";

const ItemsList: FC = () => {
  const {
    state: { items },
  } = useItemContext();

  const { paginatedItems } = usePagination(items);

  return (
    <div className={style["items-list"]}>
      {paginatedItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export { ItemsList };
