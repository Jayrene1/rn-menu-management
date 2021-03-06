import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';

import { COLOR } from '../lib/constants';
import { MenuItem } from '../lib/models';
import { UseMenu } from '../lib/use-menu';
import { AddItemModal } from './AddItemModal';
import { AddButton } from './Buttons';
import { EditItemModal } from './EditItemModal';
import { SectionHeader } from './Layout';
import { MenuListItem } from './MenuListItem';

type Props = {
  menu: UseMenu;
};

export const MenuList = ({ menu }: Props) => {
  const [addModalIsVisible, setAddModalIsVisible] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const { items, addItem, removeItemById, editItem } = menu;

  const displayItemInfo = (item: MenuItem) => {
    Alert.alert(item.title, `Description: ${item.description}`, [
      { text: 'Close', style: 'cancel' },
      { text: 'Edit', onPress: () => setEditingItem(item) },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () => confirmRemove(item),
      },
    ]);
  };

  const confirmRemove = (item: MenuItem) => {
    Alert.alert('Confirm', `Are you sure you want to delete ${item.title}?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Confirm',
        style: 'destructive',
        onPress: () => removeItemById(item.id),
      },
    ]);
  };

  return (
    <>
      <FlatList
        ListHeaderComponent={() => (
          <SectionHeader title="Your Menu">
            <AddButton
              onPress={() => setAddModalIsVisible(!addModalIsVisible)}
              accessibilityLabel="Open Add Item Form"
            />
          </SectionHeader>
        )}
        data={items}
        renderItem={({ item }) => (
          <MenuListItem item={item} onPress={displayItemInfo} />
        )}
        keyExtractor={(item) => `menu-item-${item.id}`}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.margin} />}
        ListFooterComponent={() => <View style={styles.margin} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Oops! Your menu appears to be empty. Try adding some new items.
            </Text>
          </View>
        )}
      />
      <AddItemModal
        isVisible={addModalIsVisible}
        setIsVisible={setAddModalIsVisible}
        addItem={addItem}
      />
      <EditItemModal
        item={editingItem}
        setItem={setEditingItem}
        editItem={editItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  margin: {
    height: 20,
  },
  emptyContainer: {
    flex: 1,
    marginBottom: 102, // centers the contained text by adding marginBottom equal to the section header height above'
    justifyContent: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: COLOR.gray[500],
    lineHeight: 28,
    fontSize: 18,
  },
});
