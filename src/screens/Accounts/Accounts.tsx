import React from 'react';
import {useTheme} from '@react-navigation/native';
import {useAppSelector, useLanguage} from 'hooks';
import {accountSelector} from 'features/accounts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppStatusBar} from 'components';
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
        style: {paddingTop: insets.top, backgroundColor: colors.background},
      }}>
      {tabs}
    </Tab.Navigator>
  );
}

export default function Accounts() {
  return (
    <>
      <AppStatusBar />
      <Tabs />
    </>
  );
}
