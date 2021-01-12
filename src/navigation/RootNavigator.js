import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useDispatch, useSelector} from 'react-redux';

import Loader from '../components/Loader';
import AuthStackComponent from './AuthStack';
import AppStackComponent from './AppStack';
import {getUserToken} from '../store/selectors/auth';
import {signInUserFail, restoreTokenUser} from '../store/actions/auth';

const RootNavigator = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);

  useEffect(() => {
    setLoading(true);

    const restoreToken = async () => {
      try {
        const restoredToken = await AsyncStorage.getItem('@token');

        dispatch(restoreTokenUser(restoredToken));
        setLoading(false);
      } catch (e) {
        const error = 'Login error';

        setLoading(false);
        dispatch(signInUserFail(error));
      }
    };

    restoreToken();
  }, []);

  if (loading) {
    return <Loader size={'large'} />;
  }

  return token ? <AppStackComponent /> : <AuthStackComponent />;
};

export default RootNavigator;

// TODO: остановился на том что не до конца понял как сделать стейт редакста
// под регистрация и авторизацию, какие данные следует там держать нужно разобрать
