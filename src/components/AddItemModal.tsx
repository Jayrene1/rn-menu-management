import React from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { COLOR } from '../lib/constants';
import { WideButton } from './Buttons';
import { Input } from './Inputs';
import { SectionHeader } from './Layout';
import { ScreenWrapper } from './ScreenWrapper';

type Props = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export const AddItemModal = ({ isVisible, setIsVisible }: Props) => {
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
            <Input label="Title" />
            <View style={styles.margin16} />
            <Input label="Description" />
            <View style={styles.margin16} />
            <Input label="Price" />
            <View style={styles.margin16} />
            <Input label="Image URL" />
            <View style={styles.margin16} />
            <View style={styles.margin16} />
            <WideButton label="Add Item To Menu +" />
          </View>
        </ScrollView>
      </ScreenWrapper>
    </Modal>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 24,
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
    marginBottom: 32,
  },
});
