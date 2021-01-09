import React from 'react';
import { Platform} from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../../../constants';

export const AppHeaderIcon = props => 
    <HeaderButton
        {...props} 
        title={props.title}
        iconSize={27}
        color={Platform.OS === 'android' ? theme.colors.white : theme.colors.main }
    />;