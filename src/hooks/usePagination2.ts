// import { useEffect } from "react";
// import { SET_CURRENT_PAGE } from "../constants/actions";
// import { ItemType } from "../types/item";
// import { usePaginationContext } from "./usePaginationContext";
// import { useSearchParams } from "react-router-dom";

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

//   const [searchParams, setSearchParams] = useSearchParams();

//   // Useless but gives error if removed when npm run build
//   useEffect(() => {
//     const page = searchParams.get("page");
//     if (page && !isNaN(Number(page))) {
//       dispatch({ type: SET_CURRENT_PAGE, payload: Number(page) });
//     }
//   }, [searchParams, dispatch]);

//   const handlePageChange = (page: number) => {
//     dispatch({ type: SET_CURRENT_PAGE, payload: page });
//     setSearchParams({ page: page.toString() });
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
