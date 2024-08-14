import { FC, ReactNode, useReducer } from "react";
import { initialState, reducer } from "../../reducers/filter2";
import { FilterContext } from "./FilterContext";

type FilterProviderPropsType = {
  children: ReactNode;
};

const FilterProvider: FC<FilterProviderPropsType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("filters:", state.filters);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider };
