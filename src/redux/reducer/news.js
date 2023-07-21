// import { createReducer } from "@reduxjs/toolkit";
// import {
//   newsFetching,
//   newsFetched,
//   newsFetchingError,
//   newsCreated,
//   newsDeleted,
// } from "../actions";

// const initialState = {
//   news: [],
//   newsLoadingStatus: "pending",
// };

// const news = createReducer(
//   initialState,
//   {
//     [newsFetching]: (state) => {
//       state.newsLoadingStatus = "loading";
//     },
//     [newsFetched]: (state, action) => {
//       state.news = action.payload;
//       state.newsLoadingStatus = "loading";
//     },
//     [newsFetchingError]: (state) => {
//       state.newsLoadingStatus = "error";
//     },
//     [newsCreated]: (state, action) => {
//       state.news.push(action.payload);
//     },
//     [newsDeleted]: (state, action) => {
//       state.news = state.news.filter((item) => item.id !== action.payload);
//     },
//   },
//   [],
//   (state) => state
// );

// // const news = createReducer(initialState, (builder) => {
// //   builder
// //     .addCase(newsFetching, (state) => {
// //       state.newsLoadingStatus = "loading";
// //     })
// //     .addCase(newsFetched, (state, action) => {
// //       state.news = action.payload;
// //       state.newsLoadingStatus = "loading";
// //     })
// //     .addCase(newsFetchingError, (state) => {
// //       state.newsLoadingStatus = "error";
// //     })
// //     .addCase(newsCreated, (state, action) => {
// //       state.news.push(action.payload);
// //     })
// //     .addCase(newsDeleted, (state, action) => {
// //       state.news = state.news.filter((item) => item.id !== action.payload);
// //     })
// //     .addDefaultCase(() => {});
// // });

// export default news;
