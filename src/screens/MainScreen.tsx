import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Block } from '../app/common/components/ui';
import { theme } from '../constants';

export default function MainScreen({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) {
  return (
    <Block base color="main">
      <Text style={styles.mainText}>
        Лучшее место для покупки и продажи {/* скинов */}, голды, аккаунтов 🎉
      </Text>
      <Text style={styles.discountText}>
        0% комиссия - успевай пока внедряю
      </Text>
      <Text style={styles.discountText}>
        Авторизируйтесь, чтобы использовать приложение на полную
      </Text>
      <View style={styles.authButtonView}>
        <Button
          color={theme.colors.suborange}
          onPress={() => navigation.navigate('Login')}
          title="Авторизируйтесь"
        />
      </View>
      <View style={styles.nextButtonView}>
        <Button
          color={theme.colors.main}
          onPress={() => navigation.navigate('MainBottom')}
          title="Далее"
        />
      </View>
    </Block>
  );
}

const styles = StyleSheet.create({
  mainText: {
    //borderColor: 'yellow', borderWidth: 1, borderStyle: 'solid',
    marginTop: '20%',
    //paddingHorizontal: 5,
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  discountText: {
    marginVertical: '5%',
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
  authButtonView: {
    marginHorizontal: 10,
  },
  nextButtonView: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});
