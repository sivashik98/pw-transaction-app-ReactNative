const fetchHelper = (requestUrl, path, params) => {
  return fetch(`${requestUrl}${path}`, params).then((res) => res.json());
};

export default fetchHelper;
