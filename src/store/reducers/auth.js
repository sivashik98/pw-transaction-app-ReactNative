import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  CLEAR_ERROR,
} from '../constants';

const initialState = {
  loading: false,
  token: null,
  isSignOut: false,
  isSignedUp: false,
  // firstLogin: false,
  singUpError: false,
  singInError: false,
};

const auth = (state = initialState, action) => {
  // Register
  if (action.type === SIGN_UP) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === SIGN_UP_SUCCESS) {
    return {
      ...state,
      loading: false,
      token: action.token,
      singUpError: null,
      isSignedUp: true,
    };
  }

  if (action.type === SIGN_UP_FAIL) {
    return {...state, loading: false, singUpError: action.error};
  }

  if (action.type === CLEAR_ERROR) {
    return {...state, singUpError: null, singInError: null};
  }

  // Login
  // if (action.type === SIGN_IN) {
  //   return {
  //     ...state,
  //     loading: true,
  //   };
  // }
  //
  // if (action.type === SIGN_IN_SUCCESS) {
  //   return {
  //     ...state,
  //     loading: false,
  //     token: action.token,
  //     singUpError: null,
  //     isSignedUp: true,
  //   };
  // }
  //
  // if (action.type === SIGN_IN_FAIL) {
  //   return {...state, loading: false, singUpError: action.error};
  // }

  // Token
  if (action.type === SIGN_IN) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === SIGN_IN_SUCCESS) {
    return {
      ...state,
      loading: false,
      token: action.token,
      singUpError: null,
      isSignedUp: true,
    };
  }

  if (action.type === SIGN_IN_FAIL) {
    return {...state, loading: false, singUpError: action.error};
  }

  return state;
};

export default auth;
