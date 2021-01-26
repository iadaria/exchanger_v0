import React from 'react';
import { Linking } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../app/common/components/ui/AppHeaderIcon';
import { DefaultTheme } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { colors } from '../app/common/constants/colors';
import { vars } from '../app/common/constants/common';
import { showMessage } from 'react-native-flash-message';

export const defaultScreenOptions: StackNavigationOptions = {
  title: 'Бот-Гарант',
  headerStyle: {
    backgroundColor: colors.main,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  headerTintColor: colors.white,
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
          Linking.openURL(`http://t.me/${vars.telgroup}`).catch((error) => {
            console.log('error when open telegram group', error);
            showMessage({
              message: `${error.message}`,
              type: 'warning',
            });
          });
        }}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="title"
        iconName="bell-outline"
        onPress={() =>
          showMessage({
            message: 'test',
            type: 'warning',
          })
        }
      />
    </HeaderButtons>
  ),
};

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    background: colors.screen,
  },
};
