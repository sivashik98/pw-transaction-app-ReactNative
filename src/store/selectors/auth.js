export const getLoadingStatus = (store) => {
  return store.auth.loading;
};

export const getSignUpError = (store) => {
  return store.auth.singUpError;
};

export const getSignInStatus = (store) => {
  return store.auth.isSignedUp;
};

export const getSignInError = (store) => {
  return store.auth.singInError;
};

export const getUserToken = (store) => {
  return store.auth.token;
};
