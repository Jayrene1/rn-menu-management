import { useCallback, useEffect, useState } from 'react';

import { MenuItem } from './models';

export const useMenu = (initialMenu: MenuItem[]) => {
  const [menu, setMenu] = useState(initialMenu);

  useEffect(() => {
    setMenu(initialMenu);
  }, [initialMenu]);

  const setItem = useCallback(
    (item: MenuItem) => setMenu([...menu, item]),
    [menu]
  );

  const removeItemById = useCallback(
    (id: number) => setMenu(menu.filter((item) => item.id !== id)),
    [menu]
  );

  return { menu, setItem, removeItemById };
};
