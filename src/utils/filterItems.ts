import { FilterType } from "../types/filter";
import { ItemType } from "../types/item";

const filterItems = (items: ItemType[], filters: FilterType): ItemType[] => {
  //   console.log("filters:", filters);
  return items.filter((item) => {
    const { name, category, price, inStock } = filters;

    const matchesName = name
      ? item.name.toLowerCase().includes(name.toLowerCase())
      : true;
    // const matchesCategory = category ? item.category === category : true;
    const matchesCategory = category
      ? item.category.toLowerCase() === category.toLowerCase()
      : true;
    const matchesPrice = price ? item.price <= parseInt(price, 10) : true;
    const matchesStock = inStock === "true" ? item.inStock : true;

    return matchesName && matchesCategory && matchesPrice && matchesStock;
  });
};

export { filterItems };
