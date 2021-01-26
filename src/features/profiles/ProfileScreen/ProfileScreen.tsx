import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { showMessage } from 'react-native-flash-message';
import {
  signOutFirebase,
  signOutGoogle,
} from '../../../app/firestore/firebaseService';
import { colors } from '../../../app/common/constants/colors';
import ProfileForm from './ProfileForm';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../app/store/rootReducer';
import { IProfileState } from '../profileReducer';
import { IAsyncState } from '../../async/asyncReducer';

export function ProfileScreen({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) {
  const { currentUserProfile } = useSelector<IRootState>(
    (state) => state.profile,
  ) as IProfileState;
  const { loading, error } = useSelector<IRootState>(
    (state) => state.async,
  ) as IAsyncState;

  let profile = currentUserProfile;

  if ((loading && !profile) || (!profile && !error)) {
    return null;
  }

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
      <ProfileForm profile={profile} />
      <View style={styles.buttons}>
        <Button onPress={handleSignOut} color={colors.pink} title="Выход" />
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
