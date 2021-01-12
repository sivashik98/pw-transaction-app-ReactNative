export const getNews = (store) => {
  return store.news.news;
};

export const getFetchingStatus = (store) => {
  return store.news.isFetching;
};

export const getLoadingStatus = (store) => {
  return store.news.isLoading;
};

export const getSortingStatus = (store) => {
  return store.news.isSorting;
};

export const getRefreshingStatus = (store) => {
  return store.news.isRefreshing;
};

export const getWarning = (store) => {
  return store.news.warning;
};
