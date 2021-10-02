import 'react-native';

import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Alert } from 'react-native';

import { MenuList } from '../src/components/MenuList';

const menu = {
  items: [
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
  ],
  addItem: jest.fn(),
  removeItemById: jest.fn(),
  editItem: jest.fn(),
};

const alertMock = jest.spyOn(Alert, 'alert');

describe('MenuList', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all menu items', () => {
    const { getByText } = render(<MenuList menu={menu} />);

    menu.items.forEach((item) => {
      expect(getByText(item.title)).toBeDefined();
    });
  });
  it('displays item info alert on item press', () => {
    const { getAllByLabelText } = render(<MenuList menu={menu} />);

    const firstItem = getAllByLabelText('Open Item Options')[0];

    fireEvent.press(firstItem);

    expect(alertMock).toBeCalled();
  });
  it('displays an empty menu message when menu items are empty', () => {
    const { getByText } = render(<MenuList menu={{ ...menu, items: [] }} />);

    expect(
      getByText(
        'Oops! Your menu appears to be empty. Try adding some new items.'
      )
    ).toBeDefined();
  });
  it('opens AddItemModal on Add Item button press', () => {
    const { getByText, getByLabelText } = render(<MenuList menu={menu} />);

    fireEvent.press(getByLabelText('Open Add Item Form'));

    expect(getByText('Add Item')).toBeDefined();
  });
});
