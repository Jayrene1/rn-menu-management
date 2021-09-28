import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { MenuItem } from '../lib/models';
import { AddItemModal } from './AddItemModal';
import { AddButton } from './Buttons';
import { SectionHeader } from './Layout';
import { MenuListItem } from './MenuListItem';

type Props = {
  menuItems: MenuItem[];
};

export const MenuList = ({ menuItems }: Props) => {
  const [addModalIsVisible, setAddModalIsVisible] = useState(false);

  return (
    <>
      <FlatList
        ListHeaderComponent={() => (
          <SectionHeader title="Your Menu">
            <AddButton
              onPress={() => setAddModalIsVisible(!addModalIsVisible)}
            />
          </SectionHeader>
        )}
        data={menuItems}
        renderItem={({ item }) => <MenuListItem item={item} />}
        keyExtractor={(item) => `menu-item-${item.id}`}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.margin} />}
        ListFooterComponent={() => <View style={styles.margin} />}
      />
      <AddItemModal
        isVisible={addModalIsVisible}
        setIsVisible={setAddModalIsVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  margin: {
    height: 24,
  },
});
