import React, { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

type Props = {
  children: ReactNode;
};

export const ScreenWrapper = ({ children }: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'android' ? 96 : undefined}
      style={styles.wrapper}>
      <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
