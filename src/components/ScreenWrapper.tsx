import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet } from 'react-native';

// const Component = Platform.select({
//   ios: () => require('ComponentIOS'),
//   android: () => require('ComponentAndroid'),
// })();

type Props = {
  children: ReactNode;
};

export const ScreenWrapper = ({ children }: Props) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
      <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
