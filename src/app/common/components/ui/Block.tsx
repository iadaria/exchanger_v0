import React from 'react';
import { StyleSheet, Animated, View, StyleProp, ViewStyle } from 'react-native';
import { theme } from '../../../../constants';
import {
  IBlockStyleProps,
  IUiBlock,
  IUiMargin,
  IUiPadding,
} from '../../../models/IUi';
import { getColorText } from '../../utils/utils';

export function Block(props: IUiBlock) {
  function handleMargins(): IUiMargin {
    const { margin } = props;

    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin,
      };
    }

    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
      }
    }
    return {};
  }

  function handlePaddings(): IUiPadding {
    const { padding } = props;
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding,
      };
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0],
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1],
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1],
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3],
          };
      }
    }
    return {};
  }

  //console.log(others);

  const {
    flex,
    base,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    color,
    space,
    padding,
    margin,
    animated,
    wrap,
    style,
    children,
    ...otherProps
  } = props;

  console.log(getColorText('otherProps', otherProps, 'yellow'));

  const blockStyles = [
    styles.block,
    flex && { flex },
    flex === false && { flex: 0 }, // reset - disable flex
    base && { padding: theme.sizes.padding },
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    margin && { ...handleMargins() },
    padding && { ...handlePaddings() },
    card && styles.card,
    shadow && styles.shadow,
    space && { justifyContent: `space-${space}` },
    wrap && { flexWrap: 'wrap' },
    color && styles[color as keyof typeof styles], // predefined styles for backgroundColor
    style,
  ] as StyleProp<ViewStyle>;

  if (animated) {
    return (
      <Animated.View style={blockStyles} {...otherProps}>
        {children}
      </Animated.View>
    );
  }

  return (
    <View style={blockStyles} {...otherProps}>
      {children}
    </View>
  );
}

export const styles = StyleSheet.create<IBlockStyleProps>({
  block: {
    flex: 1, //borderWidth: 1, borderColor: 'red'
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: theme.sizes.radius,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  accent: { backgroundColor: theme.colors.accent },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  black: { backgroundColor: theme.colors.black },
  white: { backgroundColor: theme.colors.white },
  gray: { backgroundColor: theme.colors.gray },
  gray2: { backgroundColor: theme.colors.gray2 },

  main: { backgroundColor: theme.colors.main },
  submain: { backgroundColor: theme.colors.submain },
  orange: { backgroundColor: theme.colors.orange },
  suborange: { backgroundColor: theme.colors.suborange },
  pink: { backgroundColor: theme.colors.pink },
  section: { backgroundColor: theme.colors.section },
});
