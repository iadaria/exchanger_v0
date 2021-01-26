import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SectionTitle from '../../../app/common/components/ui/SectionTitle';
import SectionTextRow from '../../../app/common/components/ui/SectionTextRow';
import { AppText, Block } from '../../../app/common/components/ui';
import { theme } from '../../../constants';
import { sizes } from '../../../app/common/constants/sizes';
import { colors } from '../../../app/common/constants/colors';

export default function ProfileMain({ profile }: any) {
  return (
    <>
      <SectionTitle text="Профиль" />
      <SectionTextRow
        label={<AppText>Имя</AppText>}
        value={
          <>
            <AppText style={{ fontFamily: 'Montserrat-Bold' }}>
              {profile.displayName}
            </AppText>
            <TouchableHighlight
              style={{ marginLeft: 10 }}
              onPress={() => console.log('Changing')}
              underlayColor="#eee">
              <MaterialCommunityIcons
                size={25}
                name="square-edit-outline"
                color={theme.colors.submain}
              />
            </TouchableHighlight>
          </>
        }
      />
      <SectionTextRow
        label={<AppText>Рейтинг</AppText>}
        value={
          <>
            {/* color="#900" solid */}
            <MaterialCommunityIcons
              size={25}
              name="star"
              color={theme.colors.suborange}
            />
            <AppText>110.8</AppText>
          </>
        }
      />
      <SectionTextRow
        label={<AppText>Отзывы</AppText>}
        value={
          <>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <SimpleLineIcons size={20} name="like" color="gray" />
              <AppText ml={3}>11</AppText>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginLeft: 10,
              }}>
              <SimpleLineIcons size={20} name="dislike" color="gray" />
              <AppText ml={3}>0</AppText>
            </View>
          </>
        }
      />

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
              color={theme.colors.submain}
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

// @ts-ignore
const styles = StyleSheet.create({});
