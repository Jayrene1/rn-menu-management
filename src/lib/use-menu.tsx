import { useCallback, useMemo, useState } from 'react';

import { MenuItem } from './models';

export type UseMenu = {
  items: MenuItem[];
  addItem: (item: MenuItem) => void;
  removeItemById: (id: number) => void;
};

export const useMenu = (initialItems: MenuItem[]): UseMenu => {
  const [items, setItems] = useState(initialItems);

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  /*
    similar to the purpose of a SQL primary key, this value tracks
    the highest number id in the items array and is incremented
    when adding new menu items to avoid duplicate id's
  */
  const idIterator = useMemo(() => {
    const ids = items.map((item) => item.id);
    return ids.length > 0 ? Math.max.apply(null, ids) : 0;
  }, [items]);

  const addItem = useCallback(
    (item: MenuItem) => {
      setItems([...items, { ...item, id: idIterator + 1 }]);
    },
    [items, idIterator]
  );

  const removeItemById = useCallback(
    (id: number) => setItems(items.filter((item) => item.id !== id)),
    [items]
  );

  return { items, addItem, removeItemById };
};
