import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, sizes } from '../../constants';

export function AppButton(props: any) {
  const {
    style,
    opacity,
    gradient,
    color,
    startColor,
    endColor,
    end,
    start,
    locations,
    shadow,
    children,
    ...other
  } = props;

  const buttonStyles = [
    styles.button,
    shadow && styles.shadow,
    color && styles[color as keyof typeof styles], // predefined styles colors for backgroundColor
    color &&
      !styles[color as keyof typeof styles] && { backgroundColor: color }, // custom backgroundColor
    style,
  ];

  if (gradient) {
    return (
      <TouchableOpacity style={buttonStyles} activeOpacity={opacity} {...other}>
        <LinearGradient
          start={start}
          end={end}
          locations={locations}
          style={buttonStyles}
          colors={[startColor, endColor]}>
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
      {...other}>
      {children}
    </TouchableOpacity>
  );
}

AppButton.defaultProps = {
  startColor: colors.primary,
  endColor: colors.secondaryGradient,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: colors.white,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.radius,
    height: sizes.base * 3,
    justifyContent: 'center',
    marginVertical: sizes.padding / 3,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  accent: { backgroundColor: colors.warning },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.secondary },
  // tertiary: { backgroundColor: colors.tertiary },
  black: { backgroundColor: colors.black },
  white: { backgroundColor: colors.white },
  gray: { backgroundColor: colors.gray },
  gray2: { backgroundColor: colors.gray2 },
  // gray3: { backgroundColor: colors.gray3 },
  // gray4: { backgroundColor: colors.gray4 },
});
