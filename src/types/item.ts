import { SET_ITEMS } from "../constants/actions";

type ItemType = {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
};

type ItemStateType = {
  items: ItemType[];
};

// actions

type SetItemsActionType = {
  type: typeof SET_ITEMS;
  payload: ItemType[];
};

type ItemActionType = SetItemsActionType;

export type {
  ItemType,
  ItemStateType,
  // actions
  ItemActionType,
};
