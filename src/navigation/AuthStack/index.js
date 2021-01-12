import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../../screens/SignUp';
import SignInScreen from '../../screens/SignIn';

const {Navigator, Screen} = createStackNavigator();

const AuthStackComponent = () => {
  return (
    <>
      <StatusBar backgroundColor="#314173" barStyle="light-content" />

      <Navigator>
        <Screen
          name="SignIn"
          component={SignInScreen}
          options={{title: 'Sign In', gestureEnabled: true}}
        />

        <Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: 'Sign Up', gestureEnabled: true}}
        />
      </Navigator>
    </>
  );
};

export default AuthStackComponent;
