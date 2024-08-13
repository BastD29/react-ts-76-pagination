import { FC, ReactNode, useReducer } from "react";
import { initialState, reducer } from "../../reducers/pagination";
import { PaginationContext } from "./PaginationContext";

type PaginationProviderPropsType = {
  children: ReactNode;
};

const PaginationProvider: FC<PaginationProviderPropsType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state:", state);

  return (
    <PaginationContext.Provider value={{ state, dispatch }}>
      {children}
    </PaginationContext.Provider>
  );
};

export { PaginationProvider };
