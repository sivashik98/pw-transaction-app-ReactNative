import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';

import HomeScreen from '../../screens/Home';
import ListNewsScreen from '../../screens/ListNews';

import PersonSvg from '../../../assets/svg/Person';
import ListSvg from '../../../assets/svg/List';

const {Navigator, Screen} = createBottomTabNavigator();

const stylesBar = {
  activeColor: '#000',
  inactiveColor: '#7d869b',
  labelText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: 'normal',
  },
  bar: {height: 55},
};

const AppStackComponent = () => {
  return (
    <>
      <StatusBar backgroundColor="#314173" barStyle="light-content" />

      <Navigator
        initialRouteName={HomeScreen}
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let IconSvg;

            if (route.name === 'Home') {
              IconSvg = PersonSvg;
            }

            if (route.name === 'ListNews') {
              IconSvg = ListSvg;
            }

            return <IconSvg color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: stylesBar.activeColor,
          inactiveTintColor: stylesBar.inactiveColor,
          labelStyle: stylesBar.labelText,
          style: stylesBar.bar,
        }}
        detachInactiveScreens={true}>
        <Screen name="Home" component={HomeScreen} />

        <Screen name="ListNews" component={ListNewsScreen} />
      </Navigator>
    </>
  );
};

export default AppStackComponent;
