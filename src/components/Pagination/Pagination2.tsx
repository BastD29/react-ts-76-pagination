import { FC } from "react";
import { useItemContext } from "../../hooks/useItemContext";
import { usePagination } from "../../hooks/usePagination";
import style from "./Pagination.module.scss";

const Pagination: FC = () => {
  const {
    state: { items },
  } = useItemContext();

  const { currentPage, totalPages, handlePageChange, renderPageNumbers } =
    usePagination(items);

  return (
    <div className={style["pagination"]}>
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      {renderPageNumbers().map(({ pageNumber, isCurrent }) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          disabled={isCurrent}
        >
          {pageNumber}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export { Pagination };
