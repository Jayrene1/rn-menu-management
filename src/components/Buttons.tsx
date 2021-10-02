import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { COLOR } from '../lib/constants';

export const AddButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 6, right: 6, bottom: 6, left: 6 }}
      style={styles.addButton}
      {...props}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  );
};

interface WideButtonProps extends TouchableOpacityProps {
  label: string;
}
export const WideButton = ({ label, ...props }: WideButtonProps) => {
  return (
    <TouchableOpacity style={styles.wideButton} {...props}>
      <Text style={styles.wideButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 38,
    height: 38,
    backgroundColor: COLOR.yellow[500],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    borderWidth: 2,
    borderColor: COLOR.yellow[300],
  },
  addButtonText: {
    color: COLOR.gray[0],
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 35, // lineHeight and margin help align the text to the container
    marginLeft: 1,
  },
  wideButton: {
    height: 42,
    width: '100%',
    backgroundColor: COLOR.yellow[600],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLOR.yellow[300],
  },
  wideButtonText: {
    color: COLOR.gray[0],
    fontSize: 18,
    fontWeight: '600',
  },
});
