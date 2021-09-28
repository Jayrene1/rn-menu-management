import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { MenuItem } from '../lib/models';
import { MenuListItem } from './MenuListItem';

type Props = {
  menuItems: MenuItem[];
};

export const MenuList = ({ menuItems }: Props) => (
  <FlatList
    ListHeaderComponent={() => (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Your Menu</Text>
      </View>
    )}
    data={menuItems}
    renderItem={({ item }) => <MenuListItem item={item} />}
    keyExtractor={(item) => `menu-item-${item.id}`}
    contentContainerStyle={styles.container}
    ItemSeparatorComponent={() => <View style={styles.margin} />}
  />
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 32,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
  },
  container: {
    marginHorizontal: 20,
  },
  margin: {
    height: 24,
  },
});
