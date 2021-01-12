import {takeLatest, put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {SIGN_UP} from '../constants';
import {signUpUserSuccess, signUpUserFail} from './../actions/auth';
import {requestUrl} from '../../config';
import fetchHelper from '../../helpers/fetchHelper';
import delay from '../../helpers/delay';

function* authUserWorker({body}) {
  const path = '/users';
  const params = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'},
  };

  try {
    const {id_token: token} = yield call(fetchHelper, requestUrl, path, params);
    yield createUserWorker(body);
    // console.log(token);
    yield call(AsyncStorage.setItem, '@token', token);
    // const payload = {username: body.username, token};
    // token = await AsyncStorage.getItem('@token');

    yield call(delay, 1500);
    yield put(signUpUserSuccess(token));
  } catch (e) {
    const singUpError = 'A user with that email already exists';

    yield put(signUpUserFail(singUpError));
  }
}

function* createUserWorker(data) {
  try {
    yield put(signUpUserSuccess(token));
  } catch (e) {}
}

export default function* auth() {
  yield takeLatest(SIGN_UP, authUserWorker);
}
