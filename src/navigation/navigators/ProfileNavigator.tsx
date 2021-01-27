import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../../features/profiles/components';

export default function ProfileNavigator(): JSX.Element {
  const Profile = createStackNavigator();
  return (
    <Profile.Navigator screenOptions={{ headerShown: false }}>
      <Profile.Screen name="ProfileScreen" component={ProfileScreen} />
    </Profile.Navigator>
  );
}
