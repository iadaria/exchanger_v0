import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Block, AppText, AppButton } from '../app/common/components/ui';
import { Padlock } from '../../assets';
import { sizes } from '../app/common/constants/sizes';

export default function UnauthScreen({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) {
  return (
    <Block safe full base middle>
      <Block center>
        <Padlock height={130} width={130} />
        <Block margin={[sizes.top, 0, 0]}>
          <AppText title bold>
            Доступ запрещён
          </AppText>
        </Block>
        <Block margin={[sizes.top * 1.5, 0, 0]}>
          <AppText header center>
            Войдите в свой акканут для просмотра этого раздела
          </AppText>
        </Block>
      </Block>

      <Block margin={[sizes.top, 0, 0]}>
        <AppButton yellow onPress={() => navigation.navigate('LoginNavigator')}>
          <AppText center h3 white capitalize>
            Авторизироваться
          </AppText>
        </AppButton>
      </Block>
    </Block>
  );
}
