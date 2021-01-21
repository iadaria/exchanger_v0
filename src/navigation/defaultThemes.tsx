import React from 'react';
import { Linking } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../app/common/components/ui/AppHeaderIcon';
import ErrorToast from '../app/common/components/AppToast';
import { DefaultTheme } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { theme } from '../constants';

export const defaultScreenOptions: StackNavigationOptions = {
  title: 'Бот-Гарант',
  headerStyle: {
    backgroundColor: theme.colors.main,
  },
  headerTintColor: theme.colors.white,
  headerTitleAlign: 'center',
  headerBackTitleVisible: true,
  headerTruncatedBackTitle: '',
  headerBackTitle: '',
};

export const defaultTabScreenOptions: StackNavigationOptions = {
  ...defaultScreenOptions,
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="title"
        iconName="headphones"
        onPress={() => {
          Linking.openURL(`http://t.me/${theme.vars.telgroup}`).catch(
            (error) => {
              console.log('error when open telegram group', error);
              ErrorToast(error.message);
            },
          );
        }}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="title"
        iconName="bell-outline"
        onPress={() => console.log('message')}
      />
    </HeaderButtons>
  ),
};

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.screen,
  },
};
