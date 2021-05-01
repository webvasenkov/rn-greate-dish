// @ts-nocheck
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { enableScreens } from 'react-native-screens';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import MealsNavigator from './src/navigation/MealsNavigator';

enableScreens();

const fetchFont = () => {
  return Font.loadAsync({
    'poppins-regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'poppins-light': require('./src/assets/fonts/Poppins-Light.ttf'),
    'poppins-semi-bold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
  });
};

const App = () => {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) return <AppLoading startAsync={fetchFont} onFinish={() => setIsReady(true)} onError={console.warn} />;

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

export default App;
