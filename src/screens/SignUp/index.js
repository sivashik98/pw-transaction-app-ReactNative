import React from 'react';
import {SafeAreaView} from 'react-navigation';

import SignUp from '../../pages/SingUp';
import {signUpUser, clearError} from '../../store/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {
  getLoadingStatus,
  getSignUpError,
  getSignInStatus,
} from '../../store/selectors/auth';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingStatus);
  const error = useSelector(getSignUpError);
  const isSignedUp = useSelector(getSignInStatus);

  const handleSignUpUser = (data) => {
    dispatch(signUpUser(data));
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  const handleMoveToApp = () => {
    // navigation.navigate('App');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <SignUp
        loading={loading}
        isSignedUp={isSignedUp}
        onSignUp={handleSignUpUser}
        error={error}
        onClearError={handleClearError}
        onMoveToApp={handleMoveToApp}
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;
