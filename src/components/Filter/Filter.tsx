import { FC } from "react";
import style from "./Filter.module.scss";

const Filter: FC = () => {
  return (
    <div className={style["filter"]}>
      <div className={style["filter__filter"]}>
        <label htmlFor="name">Name</label>
        <input type="search" id="name" placeholder="Name" />
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="inStock">In stock</label>
        <input type="checkbox" id="inStock" />
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="price">Price</label>
        <input type="range" id="price" min="0" max="1200" />
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="literature">Literature</option>
          <option value="transportation">Transportation</option>
          <option value="accessories">Accessories</option>
          <option value="kitchenware">Kitchenware</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
