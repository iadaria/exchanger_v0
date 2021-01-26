import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import MainScreen from '../../screens/MainScreen';
import { defaultScreenOptions } from '../defaultThemes';

export default function LoginNavigator(): JSX.Element {
  const Login = createStackNavigator();
  return (
    <Login.Navigator
      // initialRouteName="LoginScreen"
      screenOptions={defaultScreenOptions}>
      <Login.Screen name="MainScreen" component={MainScreen} />
      <Login.Screen
        name="LoginScreen"
        // options={defaultScreenOptions}
        component={LoginScreen}
      />
    </Login.Navigator>
  );
}
