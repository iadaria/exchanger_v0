import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {  StatusBar } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import MainMenu from './navigators/MainMenu';
import { defaultTheme } from './defaultThemes';
import { theme } from '../constants';

//LogBox.ignoreLogs(['Require cycle:']);

export default function AppNavigation() {

    return (
        <SafeAreaProvider>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.main} />
            <NavigationContainer theme={defaultTheme}>
                <MainMenu />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}