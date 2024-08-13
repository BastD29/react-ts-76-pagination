import { FC, ReactNode, useEffect, useReducer } from "react";
import { initialState, reducer } from "../../reducers/items";
import { ItemContext } from "./ItemContext";
import { SET_ITEMS } from "../../constants/actions";

type ItemProviderPropsType = {
  children: ReactNode;
};
const ItemProvider: FC<ItemProviderPropsType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("items:", state.items);

  useEffect(() => {
    dispatch({ type: SET_ITEMS, payload: state.items });
  }, []);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemProvider };
