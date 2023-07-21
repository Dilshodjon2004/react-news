// import { createReducer } from "@reduxjs/toolkit";
// import {
//   filtersFetching,
//   filtersFetched,
//   filtersFetchingError,
//   activeFilteredChanged,
// } from "../actions";

// const initialState = {
//   filters: [],
//   filterLoadingStatus: "sam",
//   activeFilter: "all",
// };

// const filter = createReducer(
//   initialState,
//   {
//     [filtersFetching]: (state) => {
//       state.filterLoadingStatus = "loading";
//     },
//     [filtersFetched]: (state, action) => {
//       state.filters = action.payload;
//       state.filterLoadingStatus = "pending";
//     },
//     [filtersFetchingError]: (state) => {
//       state.filterLoadingStatus = "error";
//     },
//     [activeFilteredChanged]: (state, action) => {
//       state.activeFilter = action.payload;
//     },
//   },
//   [],
//   (state) => state
// );

// // const filter = createReducer(initialState, (builder) => {
// //   builder
// //     .addCase(filtersFetching, (state) => {
// //       state.filterLoadingStatus = "loading";
// //     })
// //     .addCase(filtersFetched, (state, action) => {
// //       state.filters = action.payload;
// //       state.filterLoadingStatus = "pending";
// //     })
// //     .addCase(filtersFetchingError, (state) => {
// //       state.filterLoadingStatus = "error";
// //     })
// //     .addCase(activeFilteredChanged, (state, action) => {
// //       state.activeFilter = action.payload;
// //     })
// //     .addDefaultCase(() => {});
// // });

// export default filter;
