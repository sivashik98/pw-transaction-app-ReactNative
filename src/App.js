import * as React from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {enableScreens} from 'react-native-screens';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import rootSaga from './store/sagas';
import RootNavigator from './navigation/RootNavigator';
import configureStore from './store/configureStore';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({}, sagaMiddleware);

enableScreens();
sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
