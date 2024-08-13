import { FC /* , useEffect */ } from "react";
import { useItemContext } from "../../hooks/useItemContext";
// import { SET_ITEMS } from "../../constants/actions";
// import { useItems } from "../../hooks/useItems";
import ItemCard from "../ItemCard/ItemCard";
import style from "./ItemsList.module.scss";

const ItemsList: FC = () => {
  const {
    state: { items },
  } = useItemContext();

  // useEffect(() => {
  //   dispatch({ type: SET_ITEMS, payload: items });
  // }, [items]);

  // const { items } = useItems();

  return (
    <div className={style["items-list"]}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export { ItemsList };
