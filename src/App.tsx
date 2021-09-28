import React from 'react';
import { StatusBar } from 'react-native';

import { MenuScreen } from './MenuScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <MenuScreen />
    </>
  );
};

export default App;
