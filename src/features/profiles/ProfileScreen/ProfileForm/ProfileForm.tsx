import React from 'react';
import { TouchableHighlight } from 'react-native';
import { AppText, Block } from '../../../../app/common/components/ui';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { sizes, colors } from '../../../../app/common/constants';

export default function ProfileForm({ profile }: any) {
  return (
    <>
      <Block mar margin={[sizes.top, 0]}>
        <AppText title bold>
          Профиль
        </AppText>
      </Block>

      <Block row section card>
        <AppText>Имя</AppText>
        <Block row center>
          <AppText bold>{profile.displayName}</AppText>

          <Block margin={[0, sizes.between, 0]} />

          <TouchableHighlight
            onPress={() => console.log('Changing')}
            underlayColor={colors.section}>
            <MaterialCommunityIcons
              size={25}
              name="square-edit-outline"
              color={colors.submain}
            />
          </TouchableHighlight>
        </Block>
      </Block>

      <Block row section card>
        <AppText>Рейтинг</AppText>

        <Block row center>
          <MaterialCommunityIcons
            size={25}
            name="star"
            color={colors.suborange}
          />
          <AppText>110.8</AppText>
        </Block>
      </Block>

      <Block row section card>
        <AppText>Отзывы</AppText>

        <Block row center>
          <SimpleLineIcons size={20} name="like" color="gray" />
          <AppText ml={3}>11</AppText>

          <Block margin={[0, sizes.between, 0]} />

          <SimpleLineIcons size={20} name="dislike" color="gray" />
          <AppText ml={3}>0</AppText>
        </Block>
      </Block>
    </>
  );
}
