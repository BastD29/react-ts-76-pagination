// import { SET_CURRENT_PAGE } from "../constants/actions";
// import { ItemType } from "../types/item";
// import { usePaginationContext } from "./usePaginationContext";

// const usePagination = (items: ItemType[]) => {
//   const {
//     dispatch,
//     state: { pagination },
//   } = usePaginationContext();

//   const { currentPage, limit, totalPages } = pagination;
//   const startIndex = (currentPage - 1) * limit;
//   //   console.log("startIndex:", startIndex);
//   const endIndex = startIndex + limit;
//   //   console.log("endIndex:", endIndex);
//   const paginatedItems = items.slice(startIndex, endIndex);
//   //   console.log("paginatedItems:", paginatedItems);

//   const handlePageChange = (page: number) => {
//     dispatch({ type: SET_CURRENT_PAGE, payload: page });
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push({
//         pageNumber: i,
//         isCurrent: i === currentPage,
//       });
//     }
//     return pageNumbers;
//   };

//   return {
//     currentPage,
//     totalPages,
//     paginatedItems,
//     handlePageChange,
//     renderPageNumbers,
//   };
// };

// export { usePagination };
