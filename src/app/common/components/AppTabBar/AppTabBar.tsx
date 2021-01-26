import React from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';
import { colors } from '../../constants';

export function AppTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const name = state.routes[state.index];
  console.log('AppTabBar name++++', name);
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaView style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const TabBarIcon = options.tabBarIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // const color = !isFocused ? colors.white : colors.brown;
        // console.log('color ******', color);

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            // style={styles.cell}>
          >
            {options.tabBarIcon && (
              // <TabBarIcon color={color} focused={isFocused} />
              <TabBarIcon />
            )}
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}
