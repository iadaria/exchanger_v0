import React from 'react';
import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import { IUiInput } from '../../../models/ui';
import { colors, sizes } from '../../constants';

export function AppPapperInput(props: IUiInput) {
  const { main, style, ...otherProps } = props;

  const inputStyles = [styles.input, style];

  const themeStyles = [main && { colors: { primary: colors.main } }];
  // const theme = Object.assign({}, ...themeStyles);
  const theme = themeStyles.map((element: object) => element)[0];

  // console.log('theme', theme);

  return (
    <TextInput
      style={inputStyles}
      theme={theme}
      mode="outlined"
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: hp(sizes.input),
    marginTop: wp(sizes.top),
  },
});
