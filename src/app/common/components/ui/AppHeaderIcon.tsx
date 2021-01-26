import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../constants/colors';

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    title={props.title}
    iconSize={27}
    IconComponent={MaterialCommunityIcons}
    color={colors.white}
  />
);
