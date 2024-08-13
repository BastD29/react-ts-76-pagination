import { FC, ReactNode, useReducer } from "react";
import { initialState, reducer } from "../../reducers/items";
import { ItemContext } from "./ItemContext";

type ItemProviderPropsType = {
  children: ReactNode;
};
const ItemProvider: FC<ItemProviderPropsType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state:", state);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemProvider };
