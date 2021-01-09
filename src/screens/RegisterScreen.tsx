//import { ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../constants';

export default function RegisterScreen() {
  return (
    <View style={styles.root}>
      <Text>RegisterScreen 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main,
  },
});
