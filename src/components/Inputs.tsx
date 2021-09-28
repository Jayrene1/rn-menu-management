import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';

import { COLOR } from '../lib/constants';

interface Props extends TextInputProps {
  label: string;
}

export const Input = ({ label, ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const focusedStyle = useMemo(
    () => ({
      borderColor: isFocused ? COLOR.yellow[300] : COLOR.gray[100],
    }),
    [isFocused]
  );
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, focusedStyle]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
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
  input: {
    fontSize: 18,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: COLOR.gray[100],
    borderRadius: 8,
  },
});
