import React from 'react';
import { StatusBar } from 'react-native';

import { MenuList } from './components/MenuList';
import { ScreenWrapper } from './components/ScreenWrapper';
import { MENU_ITEMS } from './lib/constants';

const App = () => {
  return (
    <ScreenWrapper>
      <StatusBar barStyle="light-content" />
      <MenuList menuItems={MENU_ITEMS} />
    </ScreenWrapper>
  );
};

export default App;
