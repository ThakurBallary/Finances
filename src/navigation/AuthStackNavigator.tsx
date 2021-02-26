import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PinScreen } from 'screens';

export type AuthStackParamList = {
  Pin: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Pin" component={PinScreen} />
    </AuthStack.Navigator>
  );
}
