import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Block } from '../app/common/components/ui';
import { AppText } from '../app/common/components/ui';
import { sizes } from '../app/common/constants/sizes';
import { AppButton } from '../app/common/components/ui/AppButton';

export default function MainScreen({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) {
  return (
    <Block safe base color="main">
      <Block content>
        <AppText center h1 white>
          Лучшее место для покупки и продажи {/* скинов */}, голды, аккаунтов 🎉
        </AppText>
      </Block>

      <Block content padding={[sizes.base, 0, 0, 0]}>
        <AppText center h2 white>
          0% комиссия - успевай пока внедряю
        </AppText>
      </Block>

      <Block content padding={[sizes.base, 0]}>
        <AppText center h2 white>
          Авторизируйтесь, чтобы использовать приложение на полную
        </AppText>
      </Block>

      <AppButton yellow onPress={() => navigation.navigate('Login')}>
        <AppText center h3 white capitalize>
          Авторизируйтесь
        </AppText>
      </AppButton>

      <AppButton main shadow onPress={() => navigation.navigate('MainBottom')}>
        <AppText center h3 white capitalize>
          Далее
        </AppText>
      </AppButton>
    </Block>
  );
}
