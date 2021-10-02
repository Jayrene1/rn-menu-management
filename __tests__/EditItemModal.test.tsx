import 'react-native';

import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Alert } from 'react-native';

import { EditItemModal } from '../src/components/EditItemModal';

const props = {
  item: {
    id: 1,
    title: 'title',
    description: 'description',
    price: 1.23,
    imgUrl: require('../src/images/salmon-salad.jpg'),
  },
  setItem: jest.fn(),
  editItem: jest.fn(),
};

const invalidProps = {
  item: {
    id: 1,
    title: '',
    description: '',
    price: NaN,
    imgUrl: require('../src/images/salmon-salad.jpg'),
  },
  setItem: jest.fn(),
  editItem: jest.fn(),
};

const alertMock = jest.spyOn(Alert, 'alert');

const inputs = ['Title', 'Description', 'Price', 'Image URL'];

describe('EditItemModal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all inputs', () => {
    const { getByText, getByLabelText } = render(<EditItemModal {...props} />);

    inputs.forEach((label) => {
      expect(getByText(label)).toBeDefined();
      expect(getByLabelText(`${label} Input`)).toBeDefined();
    });
  });

  it('should call setItem with null on Cancel press', () => {
    const { getByText } = render(<EditItemModal {...props} />);

    fireEvent.press(getByText('Cancel'));

    expect(props.setItem).toBeCalledWith(null);
  });

  it('renders error alert if title is empty', () => {
    const { getByText } = render(<EditItemModal {...invalidProps} />);

    fireEvent.press(getByText('Finish Editing'));

    expect(alertMock).toBeCalled();
  });

  it('renders error alert if description is empty', () => {
    const { getByText } = render(<EditItemModal {...invalidProps} />);

    fireEvent.press(getByText('Finish Editing'));

    expect(alertMock).toBeCalled();
  });

  it('renders error alert if price is NaN', () => {
    const { getByText } = render(<EditItemModal {...invalidProps} />);

    fireEvent.press(getByText('Finish Editing'));

    expect(alertMock).toBeCalled();
  });

  it('calls editItem with item and setItem with null given valid submission inputs', () => {
    const { getByText } = render(<EditItemModal {...props} />);

    fireEvent.press(getByText('Finish Editing'));

    expect(props.editItem).toBeCalledWith(props.item);
    expect(props.setItem).toBeCalledWith(null);
  });
});
