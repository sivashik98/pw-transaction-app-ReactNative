import {REGISTER, REGISTER_SUCCESS, REGISTER_FAIL} from '../constants';

// Register
export const registerUser = (body) => ({
  type: REGISTER,
  body,
});

export const registerUserSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerUserFail = (error) => ({
  type: REGISTER_FAIL,
  error,
});
