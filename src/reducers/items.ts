import { SET_ITEMS } from "../constants/actions";
import { DEFAULT_ITEMS } from "../data/data";
import { ItemActionType, ItemStateType } from "../types/item";

const initialState: ItemStateType = {
  items: [],
};

const reducer = (
  state: ItemStateType,
  action: ItemActionType
): ItemStateType => {
  switch (action.type) {
    case SET_ITEMS:
      return { items: DEFAULT_ITEMS };
    default:
      return state;
  }
};

export { initialState, reducer };
