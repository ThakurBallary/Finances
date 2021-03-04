import React from 'react';
import {useTheme} from '@react-navigation/native';
import {useAppSelector, useLanguage} from 'hooks';
import {accountSelector} from 'features/accounts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import StatusBar from 'components/StatusBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AccountTab from './Tab';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  const {colors} = useTheme();
  const language = useLanguage();
  const insets = useSafeAreaInsets();
  const accounts = useAppSelector(accountSelector.activeAccounts);

  const tabs = accounts.map((account) => {
    return (
      <Tab.Screen
        key={account.bank}
        name={account.bank}
        component={AccountTab}
        initialParams={{number: account.number}}
      />
    );
  });
  if (accounts.length > 1) {
    const number = '0';
    tabs.unshift(
      <Tab.Screen
        key={number}
        name={language.all}
        component={AccountTab}
        initialParams={{number}}
      />,
    );
  }
  if (accounts.length < 4) {
    tabs.push(
      <Tab.Screen
        key="1"
        name={language.add}
        component={AccountTab}
        initialParams={{number: ''}}
      />,
    );
  }
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {backgroundColor: colors.text},
        style: {paddingTop: insets.top},
      }}>
      {tabs}
    </Tab.Navigator>
  );
}

export default function Accounts() {
  return (
    <>
      <StatusBar />
      <Tabs />
    </>
  );
}
