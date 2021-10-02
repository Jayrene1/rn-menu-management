import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { COLOR } from '../lib/constants';
import { MenuItem } from '../lib/models';

const PLACEHOLDER_IMG =
  'https://via.placeholder.com/300?text=Invalid+Image+URL';

type Props = {
  item: MenuItem;
  onPress?: (item: MenuItem) => void;
  readOnly?: boolean;
};

export const MenuListItem = ({ item, onPress, readOnly }: Props) => {
  const [imgSource, setImgSource] = useState(_createImageType(item.imgUrl));

  useEffect(() => {
    setImgSource(_createImageType(item.imgUrl));
  }, [item.imgUrl]);
  const price =
    typeof item.price === 'number' && !isNaN(item.price)
      ? item.price.toFixed(2).toString()
      : '?';

  return (
    <TouchableOpacity
      disabled={readOnly}
      style={styles.container}
      onPress={() => (onPress ? onPress(item) : null)}
      accessibilityLabel="Open Item Options">
      <Image
        source={imgSource}
        style={styles.image}
        accessibilityLabel={`${item.title} Image`}
        onError={() => {
          setImgSource(_createImageType(PLACEHOLDER_IMG));
        }}
      />
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Text style={styles.description} numberOfLines={readOnly ? 3 : 2}>
          {item.description}
        </Text>
        {!readOnly && <Text style={styles.viewButton}>See More</Text>}
      </View>
    </TouchableOpacity>
  );
};

const _createImageType = (img: string | ImageSourcePropType) =>
  typeof img === 'string' ? { uri: img } : img;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    height: 96,
    width: 96,
    borderRadius: 8,
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
    paddingRight: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: COLOR.yellow[600],
  },
  description: {
    fontSize: 14,
    color: COLOR.gray[500],
  },
  viewButton: {
    fontSize: 13,
    color: COLOR.yellow[600],
    fontWeight: '500',
    marginTop: 6,
  },
});
