import React from 'react';
import { StyleSheet } from 'react-native';
import { Block } from './Block';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { sizes, colors } from '../../constants';

export function Divider(props: any) {
  const { color, style, ...otherProps } = props;
  const dividerStyles = [styles.divider, style];

  return (
    <Block
      content
      color={color || colors.gray2}
      style={dividerStyles}
      {...otherProps}
    />
  );
}

export const styles = StyleSheet.create({
  divider: {
    height: 0,
    marginVertical: wp(sizes.top) * 2,
    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
