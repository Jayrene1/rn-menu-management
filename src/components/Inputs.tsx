import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import { COLOR } from '../lib/constants';

interface Props extends TextInputProps {
  label: string;
  isPrice?: boolean;
}

export const Input = ({ label, isPrice, ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const focusedStyle = useMemo(
    () => ({
      borderColor: isFocused ? COLOR.yellow[300] : COLOR.gray[200],
      borderWidth: 1,
    }),
    [isFocused]
  );
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.container, focusedStyle]}>
        {isPrice && (
          <View style={styles.unitContainer}>
            <Text style={styles.unitText}>$</Text>
          </View>
        )}
        <TextInput
          accessibilityLabel={`${label} Input`}
          style={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: COLOR.gray[500],
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  container: {
    borderWidth: 1,
    borderColor: COLOR.gray[100],
    borderRadius: 8,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  unitContainer: {
    borderRightWidth: 1,
    borderColor: COLOR.gray[200],
    backgroundColor: COLOR.gray[50],
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  unitText: {
    fontSize: 18,
  },
});
