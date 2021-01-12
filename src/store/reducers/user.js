import {} from '../constants';

const initialState = {
  username: null,
  email: null,
  amount: 500,

  firstLogin: false,
  transferError: false,
};

const user = (state = initialState, action) => {
  return state;
};

export default user;
