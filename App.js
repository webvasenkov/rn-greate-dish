// @ts-nocheck
import React, { useState } from 'react';
import { CategoriesScreen } from './src/screens';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fetchFont = () => {
  return Font.loadAsync({
    'poppins-regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'poppins-light': require('./src/assets/fonts/Poppins-Light.ttf'),
    'poppins-semi-bold': require('./src/assets/fonts/Poppins-Light.ttf'),
  });
};

const App = () => {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) return <AppLoading startAsync={fetchFont} onFinish={() => setIsReady(true)} onError={console.warn} />;

  return <CategoriesScreen />;
};

export default App;
