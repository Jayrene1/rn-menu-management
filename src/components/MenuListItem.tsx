import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { COLOR } from '../lib/constants';
import { MenuItem } from '../lib/models';

type Props = {
  item: MenuItem;
};

export const MenuListItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={item.imgUrl}
        style={styles.image}
        accessibilityLabel={`${item.title} Image`}
      />
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.price}>{item.price.toFixed(2).toString()}</Text>
        </View>
        <Text style={styles.description} numberOfLines={3}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

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
  },
});
