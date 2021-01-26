import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../../features/profiles/ProfileScreen';

export default function PersonalCabinetNavigator(): JSX.Element {
  const PersonalCabinet = createStackNavigator();
  return (
    <PersonalCabinet.Navigator screenOptions={{ headerShown: false }}>
      <PersonalCabinet.Screen name="ProfileScreen" component={ProfileScreen} />
    </PersonalCabinet.Navigator>
  );
}
