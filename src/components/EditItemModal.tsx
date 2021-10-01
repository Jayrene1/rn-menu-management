import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
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
import { MenuListItem } from './MenuListItem';
import { ScreenWrapper } from './ScreenWrapper';

type Props = {
  item: MenuItem | null;
  setItem: (val: MenuItem | null) => void;
  editItem: (item: MenuItem) => void;
};

export const EditItemModal = ({ item, setItem, editItem }: Props) => {
  const [priceString, setPriceString] = useState('');

  useEffect(() => {
    if (!item) {
      setPriceString('');
    }
  }, [item]);

  const setValue = (prop: 'title' | 'description' | 'imgUrl', value: string) =>
    item ? setItem({ ...item, [prop]: value }) : null;

  const setPrice = (value: string) => {
    if (item) {
      const price = parseFloat(value);
      setPriceString(value);
      setItem({ ...item, price: price });
    }
  };

  const onSubmitEditing = useCallback(() => {
    if (item) {
      const errors = _checkErrors(item);

      if (errors.length > 0) {
        Alert.alert('Error', errors.join('\n'), [
          {
            text: 'Keep Editing',
          },
          {
            text: 'Cancel Changes',
            style: 'destructive',
            onPress: () => setItem(null),
          },
        ]);
      } else {
        editItem(item);
        setItem(null);
      }
    }
  }, [item, setItem, editItem]);

  return (
    <Modal visible={!!item} animationType="slide" presentationStyle="formSheet">
      <ScreenWrapper>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContainer}>
          <SectionHeader title="Edit Item">
            <TouchableOpacity
              onPress={() => setItem(null)}
              hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </SectionHeader>
          <View style={styles.itemContainer}>
            {item && <MenuListItem item={item} readOnly />}
          </View>
          <View style={styles.container}>
            <Input
              label="Title"
              value={item?.title ?? ''}
              onChangeText={(text) => setValue('title', text)}
              autoCapitalize="words"
              autoCorrect={false}
              placeholder="Fried Rice..."
            />
            <View style={styles.margin16} />
            <Input
              label="Description"
              value={item?.description ?? ''}
              onChangeText={(text) => setValue('description', text)}
              autoCapitalize="sentences"
              placeholder="Peas, carrots, green onion, soy sauce..."
            />
            <View style={styles.margin16} />
            <Input
              label="Price"
              value={priceString}
              onChangeText={(text) => setPrice(text)}
              placeholder="4.95"
              keyboardType="decimal-pad"
              isPrice
            />
            <View style={styles.margin16} />
            <Input
              label="Image URL"
              value={typeof item?.imgUrl === 'string' ? item.imgUrl : ''}
              onChangeText={(text) => setValue('imgUrl', text)}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="https://picsum.photos/200"
            />
            <View style={styles.margin16} />
            <View style={styles.margin16} />
            <WideButton label="Finish Editing" onPress={onSubmitEditing} />
          </View>
        </ScrollView>
      </ScreenWrapper>
    </Modal>
  );
};

const _checkErrors = (item: MenuItem): string[] => {
  let newErrors = [];
  if (item.title.length <= 0) {
    newErrors.push('• Title is required.');
  }
  if (item.description.length <= 0) {
    newErrors.push('• Description is Required.');
  }
  if (isNaN(item.price)) {
    newErrors.push('• Price is not a valid number.');
  }
  return newErrors;
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
  itemContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 32,
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
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
