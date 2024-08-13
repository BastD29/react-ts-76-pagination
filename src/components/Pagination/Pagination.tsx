import { FC } from "react";
import style from "./Pagination.module.scss";
import { usePaginationContext } from "../../hooks/usePaginationContext";
import { SET_CURRENT_PAGE } from "../../constants/actions";

const Pagination: FC = () => {
  const {
    dispatch,
    state: { pagination },
  } = usePaginationContext();

  const { currentPage, limit, totalPages } = pagination;
  const startIndex = (currentPage - 1) * limit;
  console.log("startIndex:", startIndex);
  const endIndex = startIndex + limit;
  // const paginatedItems =

  const handlePageChange = (page: number) => {
    dispatch({ type: SET_CURRENT_PAGE, payload: page });
  };

  return (
    <div className={style["pagination"]}>
      <h2>Pagination</h2>
    </div>
  );
};

export { Pagination };
