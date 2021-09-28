import React from 'react';

import { MenuList } from './components/MenuList';
import { ScreenWrapper } from './components/ScreenWrapper';
import { MENU_ITEMS } from './lib/constants';
import { useMenu } from './lib/use-menu';

export const MenuScreen = () => {
  const { menu } = useMenu(MENU_ITEMS);

  return (
    <ScreenWrapper>
      <MenuList menuItems={menu} />
    </ScreenWrapper>
  );
};
