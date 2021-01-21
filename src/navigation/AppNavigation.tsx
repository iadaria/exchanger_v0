import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigators/MainNavigator';
import { defaultTheme } from './defaultThemes';
import { colors } from '../app/common/constants/colors';

//LogBox.ignoreLogs(['Require cycle:']);

export default function AppNavigation() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.main} />
      <NavigationContainer theme={defaultTheme}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
