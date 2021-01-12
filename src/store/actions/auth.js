import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  RESTORE_TOKEN,
  CLEAR_ERROR,
} from '../constants';

// signUp
export const signUpUser = (body) => ({
  type: SIGN_UP,
  body,
});

export const signUpUserSuccess = (token) => ({
  type: SIGN_UP_SUCCESS,
  token,
});

export const signUpUserFail = (error) => ({
  type: SIGN_UP_FAIL,
  error,
});

// signIn
export const signInUser = (body) => ({
  type: SIGN_UP,
  body,
});

export const signInUserSuccess = (token) => ({
  type: SIGN_UP_SUCCESS,
  token,
});

export const signInUserFail = (error) => ({
  type: SIGN_UP_FAIL,
  error,
});

// token
export const restoreTokenUser = (token) => ({
  type: RESTORE_TOKEN,
  token,
});

// export const signInUserSuccess = (token) => ({
//   type: SIGN_UP_SUCCESS,
//   token,
// });
//
// export const signInUserFail = (error) => ({
//   type: SIGN_UP_FAIL,
//   error,
// });

export const clearError = () => ({
  type: CLEAR_ERROR,
});
