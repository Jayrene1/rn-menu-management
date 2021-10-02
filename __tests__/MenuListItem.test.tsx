import 'react-native';

import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { MenuListItem } from '../src/components/MenuListItem';

const item = {
  id: 1,
  title: 'title',
  description: 'description',
  price: 1.23,
  imgUrl: require('../src/images/salmon-salad.jpg'),
};

const pressMock = jest.fn();

describe('MenuListItem', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders title, description, image, and price', () => {
    const { getByText, getByLabelText } = render(
      <MenuListItem item={item} onPress={pressMock} />
    );

    expect(getByText(item.title)).toBeDefined();
    expect(getByText(item.description)).toBeDefined();
    expect(getByLabelText(`${item.title} Image`)).toBeDefined();
    expect(getByText(item.price.toString())).toBeDefined();
  });

  it('calls onPress with item when pressed', () => {
    const { getByLabelText } = render(
      <MenuListItem item={item} onPress={pressMock} />
    );

    fireEvent.press(getByLabelText('Open Item Options'));

    expect(pressMock).toBeCalledWith(item);
  });
});
