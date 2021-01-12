import React from 'react';
import {SafeAreaView} from 'react-navigation';

import SignIn from '../../pages/SignIn';

const SignInScreen = ({navigation}) => {
  const handleRedirectSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <SignIn moveToSignUp={handleRedirectSignUp} />
    </SafeAreaView>
  );
};

export default SignInScreen;
