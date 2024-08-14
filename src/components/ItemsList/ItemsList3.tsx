import { FC, useMemo } from "react";
import { useItemContext } from "../../hooks/useItemContext";
import { useFilterContext } from "../../hooks/useFilterContext";
import { usePagination } from "../../hooks/usePagination2";
import ItemCard from "../ItemCard/ItemCard";
import { filterItems } from "../../utils/filterItems";
import style from "./ItemsList.module.scss";

const ItemsList: FC = () => {
  const {
    state: { items },
  } = useItemContext();

  const {
    state: { filters },
  } = useFilterContext();

  console.log("filters:", filters);

  // const filteredItems = useMemo(
  //   () => filterItems(paginatedItems, filters),
  //   [paginatedItems, filters]
  // );

  const filteredItems = useMemo(
    () => filterItems(items, filters),
    [items, filters]
  );

  const { paginatedItems } = usePagination(filteredItems);

  return (
    <div className={style["items-list"]}>
      {paginatedItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemsList;
