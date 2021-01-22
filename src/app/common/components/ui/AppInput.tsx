import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import { Block } from './Block';
import { AppText } from './AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, sizes } from '../../constants';
import { AppButton } from './AppButton';
import { IUiInput } from '../../../models/ui';
import { color } from 'react-native-reanimated';

export function AppInput(props: IUiInput) {
  const [toggleSecure, setToggleSecure] = useState(false);

  function renderLabel(): JSX.Element {
    const { label, error } = props;

    return (
      <Block flex={false}>
        {label ? (
          <AppText gray2={!error} accent={error}>
            {label}
          </AppText>
        ) : null}
      </Block>
    );
  }

  function renderToggle(): JSX.Element | null {
    const { secure, rightLabel } = props;

    if (!secure) {
      return null;
    }

    return (
      <AppButton
        style={styles.toggle}
        onPress={() => setToggleSecure(!toggleSecure)}>
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon
            color={colors.gray}
            size={sizes.font * 1.35}
            name={!toggleSecure ? 'md-eye' : 'md-eye-off'}
          />
        )}
      </AppButton>
    );
  }

  function renderRight(): JSX.Element | null {
    const { rightLabel, rightStyle, onRightPress } = props;

    if (!rightLabel) {
      return null;
    }

    return (
      <AppButton
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}>
        {rightLabel}
      </AppButton>
    );
  }

  const {
    outlined,
    email,
    phone,
    number,
    secure,
    error,
    // colors
    main,
    style,
    ...otherProps
  } = props;

  const isSecure = toggleSecure ? false : secure;

  const inputStyles = [
    styles.input,
    error && { borderColor: colors.accent },
    style,
  ];

  const inputPaperStyles = [main && { selectionColor: colors.main }, style];

  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';

  if (outlined) {
    return (
      <PaperInput
        {...otherProps}
        theme={{
          roundness: 50,
          colors: {
            primary: 'green',
            // underlineColor: 'transparent',
          },
        }}
        selectionColor="blue"
        underlineColor={colors.main}
        mode="outlined"
      />
    );
  }

  return (
    <Block flex={false} margin={[sizes.base, 0]}>
      {renderLabel()}
      <TextInput
        style={inputStyles}
        secureTextEntry={isSecure}
        autoCompleteType="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        {...otherProps}
      />
      {renderToggle()}
      {renderRight()}
    </Block>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.black,
    borderRadius: sizes.radius,
    fontSize: sizes.font,
    fontWeight: '500',
    color: colors.black,
    height: sizes.base * 3,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: sizes.base * 2,
    height: sizes.base * 2,
    top: sizes.base,
    right: 0,
  },
});
