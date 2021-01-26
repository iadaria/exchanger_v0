import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import {
  signOutFirebase,
  signOutGoogle,
} from '../../app/firestore/firebaseService';
import { theme } from '../../constants';
import ProfileContent from '../../features/profiles/ProfileContent';

export function PersonalCabinetScreen({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) {
  async function handleSignOut() {
    try {
      await signOutFirebase();
      navigation.navigate('LoginNavigator');
      await signOutGoogle();
    } catch (error) {
      showMessage({
        message: 'test',
        type: 'warning',
      });
      console.log('test toast');
    }
  }

  return (
    <View style={styles.root}>
      <ProfileContent />
      <View style={styles.buttons}>
        <Button
          onPress={handleSignOut}
          color={theme.colors.pink}
          title="Выход"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    //justifyContent: "center",
  },
  buttons: {},
});
