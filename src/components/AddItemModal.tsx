import React, { useCallback, useEffect, useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { COLOR } from '../lib/constants';
import { MenuItem } from '../lib/models';
import { WideButton } from './Buttons';
import { Input } from './Inputs';
import { SectionHeader } from './Layout';
import { ScreenWrapper } from './ScreenWrapper';

type Props = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  addItem: (item: MenuItem) => void;
};

const initialData = {
  title: '',
  description: '',
  price: '',
  imgUrl: '',
};

export const AddItemModal = ({ isVisible, setIsVisible, addItem }: Props) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState('');

  const setValue = (
    prop: 'title' | 'description' | 'price' | 'imgUrl',
    value: string
  ) => setData({ ...data, [prop]: value });

  useEffect(() => {
    if (!isVisible) {
      setData(initialData);
      setError('');
    }
  }, [isVisible]);

  const onSubmit = useCallback(() => {
    setError('');
    const hasError = _hasError(data);

    if (hasError) {
      setError('Please fill every field correctly to add a menu item.');
    } else {
      addItem({
        id: 0,
        title: data.title.trim(),
        description: data.description.trim(),
        price: parseFloat(data.price.trim()),
        imgUrl: data.imgUrl.trim(),
      });
      setIsVisible(false);
    }
  }, [data, addItem, setIsVisible]);

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      presentationStyle="formSheet">
      <ScreenWrapper>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContainer}>
          <SectionHeader title="Add Item">
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </SectionHeader>
          <View style={styles.spacer} />
          <View style={styles.container}>
            <Input
              label="Title"
              value={data.title}
              onChangeText={(text) => setValue('title', text)}
              autoCapitalize="words"
              autoCorrect={false}
              placeholder="Fried Rice..."
            />
            <View style={styles.margin16} />
            <Input
              label="Description"
              value={data.description}
              onChangeText={(text) => setValue('description', text)}
              autoCapitalize="sentences"
              placeholder="Peas, carrots, green onion, soy sauce..."
            />
            <View style={styles.margin16} />
            <Input
              label="Price"
              value={data.price}
              onChangeText={(text) => setValue('price', text)}
              placeholder="4.95"
              keyboardType="decimal-pad"
              isPrice
            />
            <View style={styles.margin16} />
            <Input
              label="Image URL"
              value={data.imgUrl}
              onChangeText={(text) => setValue('imgUrl', text)}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="https://picsum.photos/200"
            />
            <View style={styles.margin16} />
            <View style={styles.margin16} />
            <WideButton label="Add Menu Item" onPress={onSubmit} />
            {error && error.length > 0 ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            ) : null}
          </View>
        </ScrollView>
      </ScreenWrapper>
    </Modal>
  );
};

const _hasError = (data: Record<string, string>): boolean => {
  for (let prop in data) {
    if (!data[prop] || data[prop].trim().length <= 0) {
      return true;
    }
    if (prop === 'price' && isNaN(parseFloat(data[prop].trim()))) {
      return true;
    }
  }
  return false;
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
  scrollViewContainer: {
    flex: 1,
  },
  cancelButtonText: {
    color: COLOR.red[500],
    fontSize: 16,
    fontWeight: '600',
  },
  spacer: {
    flex: 1,
  },
  margin16: {
    height: 16,
  },
  container: {
    paddingBottom: 32,
    position: 'relative',
  },
  errorContainer: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
  },
  errorText: {
    fontSize: 14,
    color: COLOR.red[500],
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
