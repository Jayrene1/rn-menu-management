import 'react-native';

import { render } from '@testing-library/react-native';
import React from 'react';

import { MenuList } from '../src/components/MenuList';

const menuItems = [
  {
    id: 1,
    title: 'title-1',
    description: 'description-1',
    price: 1.23,
    imgUrl: require('../src/images/salmon-salad.jpg'),
  },
  {
    id: 2,
    title: 'title-2',
    description: 'description-2',
    price: 2.34,
    imgUrl: require('../src/images/salmon-salad.jpg'),
  },
  {
    id: 3,
    title: 'title-3',
    description: 'description-3',
    price: 3.45,
    imgUrl: require('../src/images/salmon-salad.jpg'),
  },
];

describe('MenuList', () => {
  it('renders all menu items', () => {
    const { getByText } = render(<MenuList menuItems={menuItems} />);

    menuItems.forEach((item) => {
      expect(getByText(item.title)).toBeDefined();
    });
  });
});
