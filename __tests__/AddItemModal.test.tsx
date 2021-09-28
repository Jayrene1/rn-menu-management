import 'react-native';

import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { AddItemModal } from '../src/components/AddItemModal';

const props = {
  isVisible: true,
  setIsVisible: jest.fn(),
  addItem: jest.fn(),
};

const inputs = ['Title', 'Description', 'Price', 'Image URL'];

const error = 'Please fill every field correctly to add a menu item.';

describe('AddItemModal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all inputs', () => {
    const { getByText, getByLabelText } = render(<AddItemModal {...props} />);

    inputs.forEach((label) => {
      expect(getByText(label)).toBeDefined();
      expect(getByLabelText(`${label} Input`)).toBeDefined();
    });
  });

  it('should call setIsVisible with false on Cancel press', () => {
    const { getByText } = render(<AddItemModal {...props} />);

    fireEvent.press(getByText('Cancel'));

    expect(props.setIsVisible).toBeCalledWith(false);
  });

  it('renders error message onPress if inputs are not filled', () => {
    const { getByText } = render(<AddItemModal {...props} />);

    fireEvent.press(getByText('Add Menu Item'));

    expect(getByText(error)).toBeDefined();
  });

  it('renders error message onPress if price is NaN', () => {
    const { getByText, getByLabelText } = render(<AddItemModal {...props} />);

    inputs.forEach((label) => {
      // set all inputs to arbitrary text that cannot be parsed as a number;
      fireEvent.changeText(getByLabelText(`${label} Input`), label);
    });

    fireEvent.press(getByText('Add Menu Item'));

    expect(getByText(error)).toBeDefined();
  });

  it('calls addItem with item and setIsVisible with false with valid submission inputs', () => {
    const { getByText, queryByText, getByLabelText } = render(
      <AddItemModal {...props} />
    );

    const values = [
      'Burger',
      'Beef, Cheese, Bun',
      '8.95',
      'https://picsum.photos/200',
    ];

    inputs.forEach((label, i) => {
      // set all inputs to valid values
      fireEvent.changeText(getByLabelText(`${label} Input`), values[i]);
    });

    fireEvent.press(getByText('Add Menu Item'));

    expect(queryByText(error)).toBeNull();
    expect(props.addItem).toBeCalledWith({
      id: 0,
      title: values[0],
      description: values[1],
      price: 8.95,
      imgUrl: values[3],
    });
    expect(props.setIsVisible).toBeCalledWith(false);
  });
});
