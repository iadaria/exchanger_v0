import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ErrorToast from '../app/common/components/AppToast';
import {
  signOutFirebase,
  signOutGoogle,
} from '../app/firestore/firebaseService';
import { theme } from '../constants';
import ProfileContent from '../features/profiles/ProfileContent';

export default function PersonalCabinetScreen({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) {
  async function handleSignOut() {
    try {
      await signOutFirebase();
      navigation.navigate('MainLogin');
      await signOutGoogle();
    } catch (error) {
      ErrorToast('test');
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
