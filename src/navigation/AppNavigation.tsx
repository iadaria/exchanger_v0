import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppFlashMessage from '../app/common/components/AppFlashMessage';
import MainNavigator from './navigators/MainNavigator';
import { defaultTheme } from './defaultThemes';
import { navigationRef } from './helpers/RootNavigation';
import { colors } from '../app/common/constants/colors';

//LogBox.ignoreLogs(['Require cycle:']);

export default function AppNavigation() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.main} />
      <NavigationContainer theme={defaultTheme} ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
      <AppFlashMessage />
    </SafeAreaProvider>
  );
}
