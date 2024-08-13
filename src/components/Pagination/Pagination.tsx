// import { FC } from "react";
// import style from "./Pagination.module.scss";
// import { usePaginationContext } from "../../hooks/usePaginationContext";
// import { SET_CURRENT_PAGE } from "../../constants/actions";
// import { useItemContext } from "../../hooks/useItemContext";

// const Pagination: FC = () => {
//   const {
//     dispatch,
//     state: { pagination },
//   } = usePaginationContext();

//   const {
//     state: { items },
//   } = useItemContext();

//   const { currentPage, limit, totalPages } = pagination;
//   const startIndex = (currentPage - 1) * limit;
//   console.log("startIndex:", startIndex);
//   const endIndex = startIndex + limit;
//   console.log("endIndex:", endIndex);
//   const paginatedItems = items.slice(startIndex, endIndex);
//   console.log("paginatedItems:", paginatedItems);

//   const handlePageChange = (page: number) => {
//     dispatch({ type: SET_CURRENT_PAGE, payload: page });
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <button
//           key={i}
//           onClick={() => handlePageChange(i)}
//           disabled={i === currentPage}
//         >
//           {i}
//         </button>
//       );
//     }
//     return pageNumbers;
//   };

//   return (
//     <div className={style["pagination"]}>
//       <button
//         disabled={currentPage === 1}
//         onClick={() => handlePageChange(currentPage - 1)}
//       >
//         Previous
//       </button>
//       {renderPageNumbers()}
//       <button
//         disabled={currentPage === totalPages}
//         onClick={() => handlePageChange(currentPage + 1)}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export { Pagination };
