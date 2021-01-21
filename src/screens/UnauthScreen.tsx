import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Block, AppText, AppButton } from '../app/common/components/ui';
import { Padlock } from '../../assets';
import { theme } from '../constants';
import { sizes } from '../app/common/constants/sizes';

export default function UnauthScreen({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) {
  return (
    <Block safe base middle>
      <Block content center>
        <Padlock height={130} width={130} />
        <Block content margin={[sizes.top, 0, 0]}>
          <AppText title bold>
            Доступ запрещён
          </AppText>
        </Block>
        <Block content margin={[sizes.top * 1.5, 0, 0]}>
          <AppText header center>
            Войдите в свой акканут для просмотра этого раздела
          </AppText>
        </Block>
      </Block>

      <Block content margin={[sizes.top, 0, 0]}>
        <AppButton yellow onPress={() => navigation.navigate('Main')}>
          <AppText center h3 white capitalize>
            Авторизироваться
          </AppText>
        </AppButton>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
  },
  title: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 15,
    marginHorizontal: 15,
    fontSize: 17,
    textAlign: 'center',
  },
});
