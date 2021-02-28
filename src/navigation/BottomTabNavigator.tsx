import React from 'react';
import {useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {icons} from 'assets';
import screens, {AccountsScreen, HomeScreen, SettingsScreen} from 'screens';

export type BottomTabParamList = {
  Accounts: undefined;
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = focused ? icons.home : icons.homeOutline;
          if (route.name === screens.accounts) {
            iconName = focused ? icons.wallet : icons.walletOutline;
          } else if (route.name === screens.settings) {
            iconName = focused ? icons.settings : icons.settingsOutline;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.text,
        inactiveTintColor: colors.text,
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
