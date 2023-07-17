export const fetchNews = (request) => (dispatch) => {
  dispatch(newsFetching())
  request("http://localhost:3001/news")
    .then((data) => dispatch(newsFetched(data)))
    .catch(() => dispatch(newsFetchingError()));
};

export const newsFetching = () => {
  return {
    type: "NEWS_FETCHING",
  };
};

export const newsFetched = (news) => {
  return {
    type: "NEWS_FETCHED",
    payload: news,
  };
};

export const newsFetchingError = () => {
  return {
    type: "NEWS_FETCHING_ERROR",
  };
};

export const newsCreated = (news) => {
  return {
    type: "NEWS_CREATED",
    payload: news,
  };
};

export const filtersFetching = () => {
  return {
    type: "FILTERS_FETCHING",
  };
};

export const filtersFetched = (filters) => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters,
  };
};

export const filtersFetchingError = () => {
  return {
    type: "FILTERS_FETCHING_ERROR",
  };
};

export const activeFilteredChanged = (filter)  => {
  return {
    type: "ACTIVE_FILTER_CHANGED",
    payload: filter,
  };
};

// export const activeFilteredChanged = (filter) => (dispatch) => {
//   setTimeout(() => {
//     dispatch({
//       type: "ACTIVE_FILTER_CHANGED",
//       payload: filter,
//     });
//   }, 1000);
// };

export const newsDeleted = (id) => {
  return {
    type: "NEWS_DELETED",
    payload: id,
  };
};
